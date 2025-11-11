import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../Images/logo0.png";
import "../Styles/Header.css"

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  // ferme le menu et navigue ensuite
  const handleNavClick = (path) => {
    setMenuOpen(false);
    setTimeout(() => navigate(path), 200); // délai léger (200ms)
  };

  return (
    <nav className="navbar bg-black navbar-expand-lg navbar-light shadow-sm fixed-top">
      <div className="container">
        <Link className="navbar-brand fw-bold text-primary" to="/" onClick={() => handleNavClick("/")}>
          <img src={logo} alt="WebCraft logo" style={{ height: "70px", marginRight: "10px" }} />
        </Link>

        <button
          className="navbar-toggler bg-white"
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className={`collapse navbar-collapse justify-content-end ${menuOpen ? "show" : ""}`}>
          <ul className="navbar-nav">
            <li className="nav-item">
              <button className="nav-link text-white btn btn-link" onClick={() => handleNavClick("/")}>Accueil</button>
            </li>
            <li className="nav-item">
              <button className="nav-link text-white btn btn-link" onClick={() => handleNavClick("/apropos")}>À propos</button>
            </li>
            <li className="nav-item">
              <button className="nav-link text-white btn btn-link" onClick={() => handleNavClick("/services")}>Services</button>
            </li>
            <li className="nav-item">
              <button className="nav-link text-white btn btn-link" onClick={() => handleNavClick("/contact")}>Contact</button>
            </li>

            <li>
              <a
                href="https://github.com/tonNomGitHub"
                target="_blank"
                rel="noopener noreferrer"
                className="lien text-white me-3 fs-4"
              >
                <i className="bi bi-github"></i>
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/tonProfilLinkedIn"
                target="_blank"
                rel="noopener noreferrer"
                className="lien text-white me-3 fs-4"
              >
                <i className="bi bi-linkedin"></i>
              </a>
             </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;
