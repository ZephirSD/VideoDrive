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
                  <a style={{textDecoration: 'none'}} href='https://www.facebook.com/VIDEODRIVE-353792156082/timeline/?ref=hl' target='BLANK_'>
                    <img src={facebook} alt="facebook" />                      
                  </a>
                  <a style={{textDecoration: 'none'}} href='https://www.youtube.com/c/VIDEODRIVE974' target='BLANK_'>
                    <img src={youtube} alt="youtube" />
                  </a>
                  <a style={{textDecoration: 'none'}} href='https://twitter.com/videodrive974' target='BLANK_'>
                    <img src={twitter} alt="twitter" />   
                  </a>
                  <a style={{textDecoration: 'none'}} href='https://instagram.com/videodrive974' target='BLANK_'>
                    <img src={instagram} alt="instagram" />
                  </a>
                  <a style={{textDecoration: 'none'}} href='https://www.tiktok.com/@videodrive974' target='BLANK_'>
                    <img src={tiktok} alt="tiktok" />
                  </a>
              </div>
          </footer>
      </>
  )
}

export default Footer