const router = require('express').Router();
const Cart = require('../db/models/Cart');
const Product = require('../db/models/Product');

// Get all carts
router.get('/', async (req, res, next) => {
  try {
    const carts = await Cart.findAll({ attributes: ['status'] });
    console.log(carts, "TEST!!!!!");
    res.json(carts);
  } catch (err) {
    console.log(err);
    next(err);
  }
});

// Get cart by IDs
router.get('/:cartsId', async (req, res, next) => {
  try {
    const cart = await Cart.findByPk(req.params.cartId, {
      include: [
        {
          model: Product,
          as: 'products',
          attributes: ['brand', 'model', 'price', 'description', 'imageURL'],
        },
      ],
    });
    console.log(cart, "TEST!!!!!");
    res.json(cart);
  } catch (err) {
    console.log(err);
    next(err);
  }
});

// Add product to cart
router.post('/', async (req, res, next) => {
  try {
    console.log('session cartId:', req.session.cartId, "TEST!!!!!");
    if (!req.session.cartId) {
      const cart = await Cart.create({});
      req.session.cartId = cart.id;
    }
    
    const cart = await Cart.findByPk(req.session.cartId);
    console.log('cart:', cart, "TEST!!!!!");
    const product = await Product.findByPk(req.body.productId);
    console.log('product:', product, "TEST!!!!!");
    await cart.addProduct(product, { through: { quantity: 1 } });
    
    const userId = req.user ? req.user.id : null;
    if (userId) {
      cart = await Cart.findOne({ where: { userId, status: 'active' } });
    }
    if (!cart) {
      cart = await Cart.create({ status: 'active', userId });
    }
    await cart.addProduct(product, { through: { quantity: req.body.quantity } });
    res.sendStatus(204);

  } catch (err) {
    console.error(err);
    next(err);
  }
});


// Remove product from cart
router.delete('/', async (req, res, next) => {
  try {
    const cart = req.user
      ? await Cart.findOne({ where: { userId: req.user.id, status: 'active' } })
      : await Cart.findByPk(req.session.cartId);
    const product = await Product.findByPk(req.body.productId);
    await cart.removeProduct(product);
    res.sendStatus(204);
  } catch (err) {
    console.log(err);
    next(err);
  }
});

module.exports = router;
