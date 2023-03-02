const Sequelize = require("sequelize");
const db = require("../db");

const Retro = db.define("retro", {
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
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  imageURL: {
    type: Sequelize.STRING,
    defaultValue:
      "https://www.sellcell.com/blog/wp-content/uploads/2015/06/cell-phones.jpg",
  },
});

module.exports = Retro;
