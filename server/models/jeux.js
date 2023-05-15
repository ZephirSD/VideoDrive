const sql = require('../db/db');

const Jeux = function(jeux) {
  this.nom = jeux.nom;
  this.description = jeux.description;
  this.genre = jeux.genre;
  this.prix_neuf = jeux.prix_neuf;
  this.image = jeux.image;
  this.prix_occasion = jeux.prix_occasion;
  this.prix_expo = jeux.prix_expo;
  this.editeur = jeux.editeur;
  this.date_publi = jeux.date_publi;
};

Jeux.findById = (id, result) => {
  sql.query(`SELECT * FROM jeux WHERE id_jeux = ${id}`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    if (res.length) {
      console.log("Jeux non trouvé: ", res[0]);
      result(null, res[0]);
      return;
    }

    result({ kind: "Pas de réponse" }, null);
  });
};

Jeux.getAll = (nom, result) => {
  let query = "SELECT * FROM jeux";

  if (nom) {
    query += ` WHERE NOM LIKE '%${nom}%'`;
  }

  sql.query(query, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("jeux: ", res);
    result(null, res);
  });
};
module.exports = Jeux;