//this is the access point for all things database related!

const db = require('./db')
const User = require('./models/User')
const Iphone = require('./models/Iphone')

//associations could go here!

module.exports = {
  db,
  models: {
    User,
    Iphone
  },
}
