const sql = require('../db/db');

const Paiement = function (paiement) {
    this.compte = paiement.compte;
    this.date_paiement = paiement.date_paiement;
    this.id_jeux = paiement.id_jeux;
};

Paiement.create = (newPaiement, result) => {
  sql.query("INSERT INTO paiement SET ?", newPaiement, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    console.log("Paiement créee: ", { id: res.insertId, ...newPaiement });
    result(null, { id: res.insertId, ...newPaiement });
  });
};
module.exports = Paiement;