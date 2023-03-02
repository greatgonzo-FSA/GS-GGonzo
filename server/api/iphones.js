const router = require("express").Router();
const { models: { Iphone }} = require('../db') 

router.get("/", async (req, res, next) => {
  try {
    const iphones = await Iphone.findAll();
    res.json(iphones);
  } catch (err) {
    next(err);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const iphoneId = await Iphone.findByPk(req.params.id);
    res.json(iphoneId);
  } catch (err) {
    next(err);
  }
});


module.exports = router;