const router = require('express').Router();
const { CartItem, Android, Iphone, Retro } = require('../db/models');

// Get all cart items
router.get('/', async (req, res, next) => {
  try {
    const cartItems = await CartItem.findAll({
      include: [Android, Iphone, Retro],
    });
    res.json(cartItems);
  } catch (err) {
    next(err);
  }
});

// Add cart item
router.post('/', async (req, res, next) => {
  try {
    const { quantity, productId, productType, cartId } = req.body;

    let product;
    if (productType === 'android') {
      product = await Android.findByPk(productId);
    } else if (productType === 'iphone') {
      product = await Iphone.findByPk(productId);
    } else if (productType === 'retro') {
      product = await Retro.findByPk(productId);
    }

    const cartItem = await CartItem.create({ quantity, productId, productType });
    await product.addCartItem(cartItem);
    await Cart.findByPk(cartId).then((cart) => {
      return cart.addCartItem(cartItem);
    });

    res.json(cartItem);
  } catch (err) {
    next(err);
  }
});

/** WORK IN PROGRESS

// Update cart item
router.put('/:cartItemId', async (req, res, next) => {
  try {
    const cartItem = await CartItem.findByPk(req.params.cartItemId);
    const updatedCartItem = await cartItem.update(req.body);
    res.json(updatedCartItem);


// Delete cart item
router.delete('/:cartItemId', async (req, res, next) => {
  try {
    await CartItem.destroy({ where: { id: req.params.cartItemId } });

**/

module.exports = router;
