import React from "react";
import { Link } from "react-router-dom";
import logo from "../Images/logo.png";
import "../Styles/Header.css"

function Header() {
 
  return (
    <nav className="navbar navbar-expand-md navbar-custom shadow-sm">
      <div className="container">

      <Link to="/" className="navbar-brand">
        <img src={logo} alt="logo Webiw" className="logo" />
      </Link>

      <button 
          className="navbar-toggler bg-white"
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarMenu" 
          aria-controls="navbarMenu" 
          aria-expanded="false" 
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
      </button>

        <div className="collapse navbar-collapse" id="navbarMenu">
          <div className="navbar-nav ms-auto">

            <Link to="/" className="nav-link lang-switch">
              <span className="fr">Accueil</span>
              <span className="kab">Accueil</span>
            </Link>

            <Link to="/about" className="nav-link lang-switch">
              <span className="fr">À propos</span>
              <span className="kab">À propos</span>
            </Link>

            <Link to="/services" className="nav-link lang-switch">
              <span className="fr">Services</span>
              <span className="kab">Services</span>
            </Link>

            <Link to="/contact" className="nav-link lang-switch">
              <span className="fr">Contact</span>
              <span className="kab">Contact</span>
            </Link>

          </div>
        </div>
        
      </div>
    </nav>
  );
}

export default Header;