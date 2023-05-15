import React from "react";
import logo from "../assets/images/logo.png";
import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <header>
        <div className="logo">
          <img src={logo} alt="logo-videodrive" />
        </div>
        <nav>
          <li>
            <Link to={"/"} style={{ textDecoration: "none", color: "white" }}>
              Accueil
            </Link>
          </li>
          <li>
            <Link
              to={"/listeProduit"}
              style={{ textDecoration: "none", color: "white" }}
            >
              Listes des produits
            </Link>
          </li>
          <li>Panier</li>
          <li>A Propos</li>
          <li>Contact</li>
        </nav>
        <div className="flexSearch">
          <div className="search">
            <input placeholder="Rechercher ..." />
            <span onClick="" className="logo-search">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="26"
                height="26"
                fill="currentColor"
                class="bi bi-search"
                viewBox="0 0 16 16"
              >
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
              </svg>
            </span>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
