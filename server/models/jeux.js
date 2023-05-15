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