import React from "react";
import Game from "../components/Game";
import Footer from "../components/Footer";
import Header from "../components/Header";

const ListeProduit = ({ jeuxListe }) => {
  return (
    <>
      <Header />
      <div>
        <section className="games-full-list">
          <div className="games-full-list-title">
            <h4>Tous les jeux</h4>
            <div className="filter-option">
              <div class="select">
                <select>
                  <option>Catégorie 1</option>
                  <option>Catégorie 2</option>
                </select>
              </div>
              <div class="select">
                <select>
                  <option> Marque 1 </option>
                  <option> Marque 2 </option>
                  <option> Marque 3 </option>
                </select>
              </div>
              <div class="select">
                <select>
                  <option> 50€ </option>
                  <option> Inférieur à 50€ </option>
                  <option> Plus de 50€ </option>
                </select>
              </div>
            </div>
          </div>

          <div>
            <div className="games-container">
              {jeuxListe.map((jeu, index) => (
                <Game
                  key={index}
                  nom={jeu.nom}
                  prix={jeu.prix_neuf}
                  image={jeu.image}
                  id={jeu.id_jeux}
                />
              ))}
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default ListeProduit;
