module.exports = app => {
  const paiement = require('../controllers/paiement.controllers');

  var router = require("express").Router();

  router.post("/", paiement.create);
  
  app.use('/api/paiement', router);
};