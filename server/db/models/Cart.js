const Sequelize = require('sequelize');
const db = require('../db');
const CartItem = require('./CartItem');
const User = require('./User');
const Android = require('./Android');
const Iphone = require('./Iphone');
const Retro = require('./Retro');


const Cart = db.define("cart", {
status: {
      type: Sequelize.ENUM('active', 'complete'),
      defaultValue: 'active',
    },
});

// Cart.belongsToMany(Product, { through: CartItem });
// Cart.hasMany(CartItem);
// CartItem.belongsTo(Cart);
// CartItem.belongsTo(Product);
// Cart.belongsTo(User);

// CartItem.belongsTo(Android);
// CartItem.belongsTo(Iphone);
// CartItem.belongsTo(Retro);
// Android.hasMany(CartItem);
// Iphone.hasMany(CartItem);
// Retro.hasMany(CartItem);

Cart.belongsTo(User);
Cart.hasMany(CartItem);
CartItem.belongsTo(Cart);
Android.belongsToMany(Cart, { through: CartItem });
Iphone.belongsToMany(Cart, { through: CartItem });
Retro.belongsToMany(Cart, { through: CartItem });



module.exports = Cart