//this is the access point for all things database related!

const db = require('./db')
const User = require('./models/User')
const Android = require('./models/Android')

//associations could go here!

module.exports = {
  db,
  models: {
    User,
    Android
  },
}
