import React from "react";
import logo from "../Images/logo1.png";
import 'bootstrap-icons/font/bootstrap-icons.css';
import "../Styles/Footer.css";

function Footer({ setActiveSection }) {
  const scrollToSection = (section) => {
    if (setActiveSection) {
      setActiveSection(section); 
    }
    const elem = document.getElementById(section);
    if (elem) elem.scrollIntoView({ behavior: "smooth" }); // scroll fluide
  };

  return (
    <footer className="footer bg-black pt-5 pb-4 mt-5">
      <div className="container text-center d-flex flex-column align-items-center">

        <img src={logo} alt="WebCiw Logo1" style={{ height: "70px" }} />

      
        <div className="footer-nav mt-4 d-flex flex-row align-items-center gap-2">
          <button className="footer-link" onClick={() => scrollToSection("hero")}>Accueil</button>
          <button className="footer-link" onClick={() => scrollToSection("apropos")}>À propos</button>
          <button className="footer-link" onClick={() => scrollToSection("services")}>Services</button>
          <button className="footer-link" onClick={() => scrollToSection("contact")}>Contact</button>
        </div>

        <div className="footer-social mt-4 d-flex flex-column align-items-center gap-2">
          <a className="social-icon" href="https://github.com/samamrani/WebCraft/" target="_blank" rel="noopener noreferrer">
            <i className="bi bi-github fs-3"></i>
          </a>
          <a className="social-icon" href="https://www.linkedin.com/in/samira-amrani/" target="_blank" rel="noopener noreferrer">
            <i className="bi bi-linkedin fs-3"></i>
          </a>
        </div>

        <p className="small text-secondary mt-4 mb-0">
          © 2026 WEBIW — Tous droits réservés
        </p>
      </div>
    </footer>
  );
}

export default Footer;
