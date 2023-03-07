const Sequelize = require('sequelize');
const db = require('../db');
const Product = require('./Product');

const Cart = db.define("cart", {
  status: {
    type: Sequelize.ENUM('active', 'complete'),
    defaultValue: 'active',
  },
});

Cart.getEverything = async function() {
  const products = await this.findAll({
    include: Product
  });

  const totalPrice = await this.calculateTotal();

  return { products, totalPrice };
};

Cart.prototype.calculateTotal = async function() {
  const cartItems = await this.getProducts();

  const totalPrice = cartItems.reduce((acc, item) => {
    return acc + (item.price * item.cartItem.quantity);
  }, 0);

  return totalPrice;
};

module.exports = Cart;
