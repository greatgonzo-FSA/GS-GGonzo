
// REMEMBER ---  users logged in and guest users
const router = require('express').Router();
const { Cart, Android, Iphone, Retro, CartItem } = require('../db/models');

// Get cart for logged in user or guest user
router.get('/', async (req, res, next) => {
  try {
    let cart;
    if (req.user) {
      // Get cart for logged in user
      cart = await Cart.findOne({
        where: {
          userId: req.user.id,
          status: 'active',
        },
        include: {
          model: [Android, Iphone, Retro],
          through: {
            model: CartItem,
            where: {
              quantity: {
                [Op.gt]: 0  //sequelize operator for greater than
              },
            },
          },
        },
      });
    } else {
// Get cart for guest user
      cart = await Cart.findByPk(req.session.cartId, {
        include: {
          model: [Android, Iphone, Retro],
          through: {
            model: CartItem,
            where: {
              quantity: {
                [Op.gt]: 0 //sequelize operator for greater than
              },
            },
          },
        },
      });
    }
    res.json(cart);
  } catch (err) {
    next(err);
  }
});


// Add product to cart
router.post('/', async (req, res, next) => {
  try {
    let cart;
    if (req.user) {
// Get cart for logged in user
      cart = await Cart.findOne({
        where: {
          userId: req.user.id,
          status: 'active',
        },
      });
    } else {
// Get cart for guest user
      cart = await Cart.findByPk(req.session.cartId);
      if (!cart) {
// Create new cart for guest user if it doesn't exist
        cart = await Cart.create({
          status: 'active',
        });
        req.session.cartId = cart.id;
      }
    }
    const productId = req.body.productId;
    const quantity = req.body.quantity;
    let product;
    if (req.body.productType === 'android') {
      product = await Android.findByPk(productId);
    } else if (req.body.productType === 'iphone') {
      product = await Iphone.findByPk(productId);
    } else if (req.body.productType === 'retro') {
      product = await Retro.findByPk(productId);
    }

    await cart.addProduct(product, { through: { quantity } });

    res.sendStatus(204);
  } catch (err) {
    next(err);
  }
});


/*  WORK IN PROGRESS ****

// Remove product from cart
router.delete('/', async (req, res, next) => {
    let cart;
    if (req.user) {
// Get cart for logged in user
      cart = await Cart.findOne({
        where: {
          userId: req.user.id,
          status: 'active',
        },
      });
    } else {
// Get cart for guest user
      cart = await Cart.findByPk(req.session.cartId);
    }
    const productId = req.body.productId;
    let product;
    if (req.body.productType === 'android') {
      product = await Android.findByPk(productId);
    } else if (req.body.productType === 'iphone') {
      product = await Iphone.findByPk(productId);
    } else if (req.body.productType === 'retro') {
      product = await Retro.findByPk(productId);
    })
*/