"use strict";
const { db, models: { User },} = require("../server/db");
const  Product  = require("../server/db/models/Product");
const Retro = require('../server/db/models/Retro')

/**
 * seed - this function clears the database, updates tables to
 *      match the models, and populates the database.
 */
async function seed() {
  await db.sync({ force: true }); // clears db and matches models to tables
  console.log("db synced!");

  // Creating Users
  const users = await Promise.all([
    User.create({ username: "cody", password: "123" }),
    User.create({ username: "murphy", password: "123" }),
  ]);

  //create Products 
  const products = await Promise.all([
    Product.create({
      name: "iphoneX",
      price: "50",
      description: "black, touch screen, wifi",
      imageURL: "",
    }),
    Product.create({
      name: "iphone15",
      price: "50",
      description: "black, touch screen, wifi",
      imageURL: "",
    }),
    Product.create({
      name: "pixel",
      price: "50",
      description: "black, touch screen, wifi",
      imageURL: "",
    }),
  ]);

  //create retro 
  const retro = await Promise.all([
    Retro.create({
      brand: "Motorola", 
      model: "RAZR V3",
      price: "39",
      imageURL: "https://www.cnet.com/a/img/resize/994f3af7074e239d021cf2c565c4c00d26ac1f66/hub/2018/03/13/3b3668c7-bc16-42a5-84e1-dad42bb9db2b/motorola-razr-v3-8768.jpg?auto=webp&fit=crop&height=675&width=1200",
    }),
    Retro.create({
      brand: "Nokia", 
      model: "5110",
      price: "23",
      imageURL: "https://fdn2.gsmarena.com/vv/pics/nokia/no5110_00.jpg",
    }),
    Retro.create({
      brand: "Blackberry", 
      model: "6230",
      price: "99",
      imageURL: "https://media.wired.co.uk/photos/606db9be85fac47146cccb24/master/w_1920%2Cc_limit/gallery-6230-3.jpg",
    }),
  ]);





  console.log(`seeded ${users.length} users`);
  console.log(`seeded successfully`);
  return {
    users: {
      cody: users[0],
      murphy: users[1],
    },
  };
}

/*
 We've separated the `seed` function from the `runSeed` function.
 This way we can isolate the error handling and exit trapping.
 The `seed` function is concerned only with modifying the database.
*/
async function runSeed() {
  console.log("seeding...");
  try {
    await seed();
  } catch (err) {
    console.error(err);
    process.exitCode = 1;
  } finally {
    console.log("closing db connection");
    await db.close();
    console.log("db connection closed");
  }
}

/*
  Execute the `seed` function, IF we ran this module directly (`node seed`).
  `Async` functions always return a promise, so we can use `catch` to handle
  any errors that might occur inside of `seed`.
*/
if (module === require.main) {
  runSeed();
}

// we export the seed function for testing purposes (see `./seed.spec.js`)
module.exports = seed;
