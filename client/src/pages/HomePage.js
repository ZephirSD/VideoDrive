import React from "react";

import Game from "../components/Game";
import ImageSlider from "../components/ImageSlider";
// import { SliderData } from "./components/SliderData";
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
const HomePage = () => {
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <span>Menu</span>
          {/* <NavBar /> */}
        </div>

        <div></div>
      </header>
      <section>
        <div>
          <ImageSlider slides={SliderData} />
        </div>
      </section>
      <section className="games-list">
        <div>
          <div className="games-title">
            <h2>Nouveautés</h2>
            <span>Voir plus ...</span>
          </div>
          <div className="games-container">
            <Game />
            <Game />
            <Game />
            <Game />
            <Game />
          </div>
        </div>
        <div>
          <div className="games-title">
            <h2>Recommandés</h2>
            <span>Voir plus ...</span>
          </div>

          <div className="games-container">
            <Game />
            <Game />
            <Game />
            <Game />
            <Game />
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
