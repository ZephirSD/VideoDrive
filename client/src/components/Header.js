import React from 'react';
import logo from '../assets/images/logo.png';

function Header() {
  return (
      <>
          <header>
              <div className='logo'>
                  <img src={logo} alt='logo-videodrive'/> 
              </div>
              <nav>
                  <li>Accueil</li>
                  <li>Listes des produits</li>
                  <li>Panier</li>
                  <li>A Propos</li>
                  <li>Contact</li>
              </nav>
          </header>
      </>
  )
}

export default Header