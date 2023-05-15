const Jeux = require('../models/jeux');

exports.findAll = (req, res) => {
  const nom = req.query.nom;

  Jeux.getAll(nom, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Erreur d'affichage de Jeux"
      });
    else res.send(data);
  });
};
