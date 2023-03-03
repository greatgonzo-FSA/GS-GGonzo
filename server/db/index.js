//this is the access point for all things database related!

const db = require('./db')
const User = require('./models/User')
// const Product = require('./models/Product')
const Cart = require('./models/Cart');
const CartItem = require('./models/CartItem');
const Iphone = require('./models/Iphone')
const Android = require('./models/Android')
const Retro = require("./models/Retro")

//associations could go here!
CartItem.belongsTo(Cart)
Cart.hasMany(CartItem)

CartItem.belongsTo(Android)
Android.hasMany(CartItem)

CartItem.belongsTo(Iphone)
Iphone.hasMany(CartItem)

CartItem.belongsTo(Retro)
Retro.hasMany(CartItem)

User.hasOne(Cart)
Cart.belongsTo(User)


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
