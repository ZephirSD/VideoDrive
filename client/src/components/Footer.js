import React from 'react';
import facebook from '../assets/images/reseaux/facebook.png';
import youtube from '../assets/images/reseaux/youtube.png';
import twitter from '../assets/images/reseaux/twitter.png';
import instagram from '../assets/images/reseaux/instagram.png';
import tiktok from '../assets/images/reseaux/tiktok.png';

function Footer() {
  return (
      <>
          <footer>
              <div className="infoEntr">
                  VIDEODRIVE "Centrale d'achat" 34, rue de la Clinique, Commerce n°5, Rés.les Colonies, BP167, 97492 Ste Clotilde Cédex.Copyright 2023
              </div>
              <div className="resSociaux">
                  <img src={facebook} alt="facebook" />
                  <img src={youtube} alt="youtube" />
                  <img src={twitter} alt="twitter" />
                  <img src={instagram} alt="instagram" />
                  <img src={tiktok} alt="tiktok" />
              </div>
          </footer>
      </>
  )
}

export default Footer