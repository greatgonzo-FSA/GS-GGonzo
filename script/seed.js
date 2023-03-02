"use strict";

const {
  db,
  models: { User },
} = require("../server/db");
const Iphone = require('../server/db/models/Iphone');
const Android = require('../server/db/models/Android');
const { db, models: { User },} = require("../server/db");
const Retro = require('../server/db/models/Retro');


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


  const Iphones = await Promise.all([
    Iphone.create({
      brand: "apple",
      model: 'iphone5' ,
      price: "50",
      description: "black, touch screen, wifi",
      imageURL: "yo",
    }),
    Iphone.create({
      brand: "apple",
      model: 'Iphone 12',
      price: "50",
      description: "black, touch screen, wifi",
      imageURL: "yo",
    }),
    Iphone.create({
      brand: "apple",
      model: 'iphoneX',
      price: "50",
      description: "black, touch screen, wifi",
      imageURL: "yo",

  //create retro 
  const retro = await Promise.all([
    Retro.create({
      brand: "Motorola", 
      model: "RAZR V3",
      price: "39",
      description: "..",
      imageURL: "https://www.cnet.com/a/img/resize/994f3af7074e239d021cf2c565c4c00d26ac1f66/hub/2018/03/13/3b3668c7-bc16-42a5-84e1-dad42bb9db2b/motorola-razr-v3-8768.jpg?auto=webp&fit=crop&height=675&width=1200",
    }),
    Retro.create({
      brand: "Nokia", 
      model: "5110",
      price: "23",
      description: "..",
      imageURL: "https://fdn2.gsmarena.com/vv/pics/nokia/no5110_00.jpg",
    }),
    Retro.create({
      brand: "Blackberry", 
      model: "6230",
      price: "99",    
      description: "..",
      imageURL: "https://media.wired.co.uk/photos/606db9be85fac47146cccb24/master/w_1920%2Cc_limit/gallery-6230-3.jpg",

    }),
  const androids = await Promise.all([
      Android.create({
        brand: 'Samsung',
        model: 'Galaxy S23 Ultra',
        price: '1380',
        description: 'simple description to be input here about Samsung',
        imageURL: 'https://1000logos.net/wp-content/uploads/2016/10/Android-Logo-2008.png',
      }),
      Android.create({
        brand: 'Google',
        model: 'Pixel 7 Pro',
        price: '900',
        description: 'simple description to be input here about Google',
        imageURL: 'https://1000logos.net/wp-content/uploads/2016/10/Android-Logo-2008.png',
      }),
      Android.create({
        brand: 'BBK Electronics',
        model: 'OnePlus 11',
        price: '700',
        description: 'simple description to be input here about BBK Electronics',
        imageURL: 'https://1000logos.net/wp-content/uploads/2016/10/Android-Logo-2008.png',
      }),
  ]);





  console.log(`seeded ${users.length} users`);
  console.log(`seeded ${Iphones.length} users`);
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
