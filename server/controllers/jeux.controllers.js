const Jeux = require('../models/jeux');

exports.findAll = (req, res) => {
  const nom = req.query.nom;

  Jeux.getAll(nom, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tutorials."
      });
    else res.send(data);
  });
};
