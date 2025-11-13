import React, { useState } from "react";
import logo from "../Images/logo0.png";

function Header({ setActiveSection }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const handleClick = (section) => {
    setActiveSection(section);
    setMenuOpen(false);
  };

  return (
    <nav className="navbar bg-black navbar-expand-lg navbar-light shadow-sm fixed-top">
      <div className="container">
       <a
  className="navbar-brand fw-bold text-primary d-flex align-items-center"
  href="#hero"
  onClick={() => handleClick("hero")}
>
  <img src={logo} alt="WebCraft logo" style={{ height: "70px", marginRight: "10px" }} />
</a>


        <button className="navbar-toggler bg-white" type="button" onClick={toggleMenu}>
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className={`collapse navbar-collapse justify-content-end ${menuOpen ? "show" : ""}`}>
          <ul className="navbar-nav align-items-center">
            <li className="nav-item">
              <button className="btn nav-link text-white" onClick={() => handleClick("hero")}>Accueil</button>
            </li>
            <li className="nav-item">
              <button className="btn nav-link text-white" onClick={() => handleClick("apropos")}>À propos</button>
            </li>
            <li className="nav-item">
              <button className="btn nav-link text-white" onClick={() => handleClick("services")}>Services</button>
            </li>
            <li className="nav-item">
              <button className="btn nav-link text-white" onClick={() => handleClick("contact")}>Contact</button>
            </li>

            {/* GitHub & LinkedIn */}
            <li className="nav-item ms-3">
              <a className="nav-link text-white" href="https://github.com/ton-profil" target="_blank" rel="noopener noreferrer">
                <i className="bi bi-github fs-5"></i>
              </a>
            </li>
            <li className="nav-item ms-2">
              <a className="nav-link text-white" href="https://www.linkedin.com/in/ton-profil" target="_blank" rel="noopener noreferrer">
                <i className="bi bi-linkedin fs-5"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;
