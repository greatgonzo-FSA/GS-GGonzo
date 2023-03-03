// REMEMBER ---  users logged in and guest users
const router = require('express').Router();
const cart = require('../../../Grace-Shopper-greatgonzo/server/db/models/Cart');
const { Cart, Android, Iphone, Retro } = require('../db/models');



router.get('/', async (req, res, next) => {
  try {
    const cart = await Cart.findAll({
      attributes: ['status']
    })
    res.json(cart)
  } catch (err) {
    next(err)
  }
})

router.get('/:cartId', async (req, res, next) => {
  try {
     const cart = await Cart.findByPk(req.params.cartId,{
      include: [{
        model: Android,
        // [Iphone, Android, Retro],
        as: "products",
        attributes: ["brand", "model", "price", "description", "imageURL"]
      }]
     })
     res.json(cart)
  } catch (err) {
    next(err)
  }
})

// Add product to cart
router.post('/', async (req, res, next) => {
  try {
    let cart;
    if (req.user) {
      cart = await Cart.findOne({
        where: {
          userId: req.user.id,
          status: 'active',
        },
      });
    } else {
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


// Remove product from cart
router.delete('/', async (req, res, next) => {
    let cart;
    if (req.user) {
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
    }
  });
