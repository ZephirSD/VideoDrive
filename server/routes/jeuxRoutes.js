module.exports = app => {
  const jeux = require('../controllers/jeux.controllers');

  var router = require("express").Router();

  // Retrieve all Tutorials
  router.get("/", jeux.findAll);

  app.use('/api/jeux', router);
};