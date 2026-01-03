import React from "react";
import { Link } from "react-router-dom";
import logo from "../Images/logo1.png";
import 'bootstrap-icons/font/bootstrap-icons.css';
import "../Styles/Footer.css";
import MentionsLegales from "../components/MentionsLegales.jsx";

function Footer() {
  
  return (
    <footer className="footer pb-4">
      <div className="container text-center d-flex flex-column align-items-center">

        <img src={logo} alt="WebCiw Logo1" style={{ height: "70px" }} />
          <div className="d-flex felx-row">
            <Link to="/" className="nav-link lang-switch">
              <span className="fr">Accueil</span>
              <span className="kab">Asmel</span>
            </Link>

            <Link to="/about" className="nav-link lang-switch">
              <span className="fr">À propos</span>
              <span className="kab">Ɣef-neɣ</span>
            </Link>
        
            <Link to="/services" className="nav-link lang-switch">
              <span className="fr">Services</span>
              <span className="kab">Imeẓla</span>
            </Link>

            <Link to="/contact" className="nav-link lang-switch">
              <span className="fr">Contact</span>
              <span className="kab">Anermis</span>
            </Link>
          </div>
            <div className="footer-social mt-4 d-flex flex-row  ligne-items-center gap-4">
              <a className="social-icon" href="https://github.com/samamrani/WebCraft/" target="_blank" rel="noopener noreferrer">
                <i className="bi bi-github fs-3"></i>
              </a>
              <a className="social-icon" href="https://www.linkedin.com/in/samira-amrani/" target="_blank" rel="noopener noreferrer">
                <i className="bi bi-linkedin fs-3"></i>
              </a>
            </div>

             <p className="small text-secondary mt-4 mb-0">
               © 2026 WEBIW — Tous droits réservés — <MentionsLegales/> mentions-legales </p>
      </div>
    </footer>
  );
}

export default Footer;
