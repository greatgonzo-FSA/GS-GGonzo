const router = require("express").Router();
const { models: { Android }} = require('../db') 

router.get("/", async (req, res, next) => {
  try {
    const androids = await Android.findAll();
    res.json(androids);
  } catch (err) {
    next(err);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const androidId = await Android.findByPk(req.params.id);
    res.json(androidId);
  } catch (err) {
    next(err);
  }
});


module.exports = router;