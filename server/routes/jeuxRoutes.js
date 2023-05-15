module.exports = app => {
  const jeux = require('../controllers/jeux.controllers');

  var router = require("express").Router();

  router.get("/", jeux.findAll);
  router.get("/:id", jeux.findOne);

  app.use('/api/jeux', router);
};