const Sequelize = require('sequelize')
const db = require("../db");

// const CartItem = require('./CartItem')
// const Cart  = require('./Cart');


const Android = db.define("android", {
  brand: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  model: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  price: {
    type: Sequelize.INTEGER,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  description: {
    type: Sequelize.TEXT,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  imageURL: {
    type: Sequelize.STRING,
    defaultValue: 'https://1000logos.net/wp-content/uploads/2016/10/Android-Logo-2008.png'
  },
});

// Android.belongsToMany(Cart, { through: CartItem })
// CartItem.belongsTo(Android)
// Android.hasMany(CartItem)

module.exports = Android