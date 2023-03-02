const Sequelize = require('sequelize');
const db = require('../db');
const Android = require('./Android');
const iPhone = require('./iPhone');
const Retro = require('./Retro');
const Cart = require('./Cart');

const CartItem = db.define('cart_item', {
  quantity: {
    type: Sequelize.INTEGER,
    defaultValue: 1,
  },
});

// CartItem.belongsTo(Android);
// CartItem.belongsTo(iPhone);
// CartItem.belongsTo(Retro);

// Android.belongsToMany(Cart, { through: CartItem });
// iPhone.belongsToMany(Cart, { through: CartItem });
// Retro.belongsToMany(Cart, { through: CartItem });
// Cart.belongsToMany(Android, { through: CartItem });
// Cart.belongsToMany(iPhone, { through: CartItem });
// Cart.belongsToMany(Retro, { through: CartItem });

CartItem.belongsTo(Cart);
CartItem.belongsTo(Product);  // is product (iphone, andriod, retro) going to be BRAND or TYPE in the data?

Cart.hasMany(CartItem);
Product.hasMany(CartItem);

module.exports = CartItem;


// cart items belongs to cart , cart has many cartItems
