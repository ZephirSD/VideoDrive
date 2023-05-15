import React from "react";
import Game from "../components/Game";
import Footer from "../components/Footer";
import Header from "../components/Header";

const ListeProduit = ({ jeuxListe }) => {
  window.scrollTo(0, 0);
  return (
    <>
      <Header />
      <div>
        <section className="games-full-list">
          <h4>Tous les jeux</h4>
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
