//this is the access point for all things database related!

const db = require('./db')
const User = require('./models/User')
const Product = require("./models/Product")
const Cart = require('./models/Cart');

Cart.belongsToMany(Product, { through: 'CartProduct' });
Product.belongsToMany(Cart, { through: 'CartProduct' });
Cart.belongsTo(User)
User.hasMany(Cart)

module.exports = {
  db,
  models: {
    User,
    Product,
    Cart,
  },
}
