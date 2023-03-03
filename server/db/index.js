//this is the access point for all things database related!

const db = require('./db')
const User = require('./models/User')
const Cart = require('./models/Cart');
const CartItem = require('./models/CartItem');
const Iphone = require('./models/Iphone')
const Android = require('./models/Android')
const Retro = require("./models/Retro")

//associations could go here!
Cart.belongsTo(User)
User.hasMany(Cart)
Cart.hasMany(Iphone, {through: "cart_item"})
Cart.hasMany(Android, {through: "cart_item"})
Cart.hasMany(Retro, {through: "cart_item"})


module.exports = {
  db,
  models: {
    User,
    Product,
    Cart,
    CartItem,
    Iphone,
    Android,
    Retro
  },
}
