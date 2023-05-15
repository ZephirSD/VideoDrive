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

exports.findOne = (req, res) => {
  Jeux.findById(req.params.id, (err, data) => {
    if (err) {
      if (err.kind === "Pas de réponses") {
        res.status(404).send({
          message: `Jeux non trouvé à l'id ${req.params.id}.`
        });
      } else {
        res.status(500).send({
          message: "Erreur de réponse à l'id " + req.params.id
        });
      }
    } else res.send(data);
  });
};
