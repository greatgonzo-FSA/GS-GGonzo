const Sequelize = require('sequelize');
const db = require('../db');
const CartItem = require('./cart_item');
const { User } = require('./User');



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