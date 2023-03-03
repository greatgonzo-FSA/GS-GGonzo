const Sequelize = require('sequelize');
const db = require('../db');
const CartItem = require('./cartItem');
const User  = require('./User');
const Product = require('./Product')



const Cart = db.define("cart", {
status: {
      type: Sequelize.ENUM('active', 'complete'),
      defaultValue: 'active',
    },
});

Cart.belongsToMany(Product, { through: CartItem });
Cart.hasMany(CartItem);
CartItem.belongsTo(Cart);
CartItem.belongsTo(Product);
Cart.belongsTo(User);


module.exports = Cart