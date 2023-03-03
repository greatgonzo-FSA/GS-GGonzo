const Sequelize = require('sequelize');
const db = require('../db');
const Cart = require('./Cart');

const Android = require('./Android');
const Iphone = require('./Iphone');
const Retro = require('./Retro');

const CartItem = db.define('cartitem', {
  quantity: {
    type: Sequelize.INTEGER,
    defaultValue: 1,
  },
  productType: {
    type: Sequelize.ENUM('Android', 'Iphone', 'Retro'),
    allowNull: false,
  },
  productId: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
});

// Android.belongsToMany(Cart, { through: CartItem });
// iPhone.belongsToMany(Cart, { through: CartItem });
// Retro.belongsToMany(Cart, { through: CartItem });
// Cart.belongsToMany(Android, { through: CartItem });
// Cart.belongsToMany(iPhone, { through: CartItem });
// Cart.belongsToMany(Retro, { through: CartItem });

// THINK: cart items belongs to cart , cart has many cartItems

// CartItem.belongsTo(Cart);
// CartItem.belongsTo(Android, { foreignKey: 'productId', constraints: false, scope: { productType: 'Android' }});
// CartItem.belongsTo(Iphone, { foreignKey: 'productId', constraints: false, scope: { productType: 'Iphone' }});
// CartItem.belongsTo(Retro, { foreignKey: 'productId', constraints: false, scope: { productType: 'Retro' } });


CartItem.belongsTo(Cart);
// CartItem.belongsTo(db.models.Android, { foreignKey: 'productId', constraints: false, scope: { productType: 'Android' }});
// CartItem.belongsTo(db.models.Iphone, { foreignKey: 'productId', constraints: false, scope: { productType: 'Iphone' }});
// CartItem.belongsTo(db.models.Retro, { foreignKey: 'productId', constraints: false, scope: { productType: 'Retro' } });
CartItem.belongsTo(Android, { foreignKey: 'productId', constraints: false, scope: { productType: 'Android' }, as: 'android' });
CartItem.belongsTo(Iphone, { foreignKey: 'productId', constraints: false, scope: { productType: 'Iphone' }, as: 'iphone' });
CartItem.belongsTo(Retro, { foreignKey: 'productId', constraints: false, scope: { productType: 'Retro' }, as: 'retro' });

Cart.hasMany(CartItem);
Android.hasMany(CartItem);
Iphone.hasMany(CartItem);
Retro.hasMany(CartItem);

module.exports = CartItem;
