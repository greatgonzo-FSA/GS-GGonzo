"use strict";
const {
  db,
  models: { User },
} = require("../server/db");
const Iphone = require('../server/db/models/Iphone')
const Android = require('../server/db/models/Android')

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
