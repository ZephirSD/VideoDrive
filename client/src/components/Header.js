import React from 'react';
import logo from '../assets/images/logo.png';
import { Link } from 'react-router-dom';

function Header() {
  return (
      <>
          <header>
              <div className='logo'>
                  <img src={logo} alt='logo-videodrive'/> 
              </div>
              <nav>
                  <li><Link to={'/'} style={{textDecoration: "none", color: 'white'}}>Accueil</Link></li>
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