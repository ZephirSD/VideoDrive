import React from "react";

import Game from "../components/Game";
import ImageSlider from "../components/ImageSlider";
import Footer from "../components/Footer";
import Header from "../components/Header";
// import { SliderData } from "./components/SliderData";
import { Link } from "react-router-dom";
const SliderData = [
  {
    image: "http://www.videodrive.fr/pub/w2k23.jpg",
  },
  {
    image: "http://www.videodrive.fr/pub/krdld.jpg",
  },
  {
    image: "http://www.videodrive.fr/pub/gowr1.jpg",
  },
  {
    image: "http://www.videodrive.fr/pub/bcld.jpg",
  },
  {
    image: "http://www.videodrive.fr/pub/opo.jpg",
  },
];
const HomePage = ({ jeuxListe }) => {
  window.scrollTo(0, 0);
  return (
    <>
      <Header />
      <div>
        <section>
          <div>
            <ImageSlider slides={SliderData} />
          </div>
        </section>
        <section className="games-list">
          <div>
            <div className="games-title">
              <h2>Nouveautés</h2>
              <span>
                <Link
                  to={"/listeProduit"}
                  style={{ textDecoration: "none", color: "white" }}
                >
                  Voir plus ...
                </Link>
              </span>
            </div>
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
          <div>
            <div className="games-title">
              <h2>Recommandés</h2>
              <span>
                <Link
                  to={"/listeProduit"}
                  style={{ textDecoration: "none", color: "white" }}
                >
                  Voir plus ...
                </Link>
              </span>
            </div>

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

export default HomePage;
