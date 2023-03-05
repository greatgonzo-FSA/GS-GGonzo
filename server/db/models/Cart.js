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
  const products = await Cart.findAll({
    include: Product
  })
  return products
}

module.exports = Cart