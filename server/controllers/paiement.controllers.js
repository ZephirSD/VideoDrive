const Paiement = require('../models/paiement');

exports.create = (req, res) => {
  if (!req.body) {
    res.status(400).send({
      message: "Les valeurs ne doivent pas être vides"
    });
  }
    const date = new Date();
    const paiement = new Paiement({
        compte: req.body.compte,
        date_paiement: date,
        id_jeux: req.body.id_jeux
  });

  Paiement.create(paiement, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Erreur lors de la création du Paiement."
      });
    else res.send(data);
  });
};