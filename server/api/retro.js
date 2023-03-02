const router = require("express").Router();
const { models: { Retro },} = require("../db");

router.get("/", async (req, res, next) => {
  try {
    const retros = await Retro.findAll();
    res.json(retros);
  } catch (error) {
    next(error);
  }
});

router.get("/:id", async (req, res, next) => {
    try {
      const retros = await Retro.findByPk(req.params.id);
      res.json(retros);
    } catch (error) {
      next(error);
    }
  });
  
  
  module.exports = router;