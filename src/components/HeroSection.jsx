import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Styles/HeroSection.css";
import heroImage from "../Images/img.jpg";

function HeroSection({ setActiveSection }) {
  return (
    <section
      className="hero text-light d-flex align-items-center"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${heroImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container text-center" data-aos="fade-up">
        <h1 className="fw-bold mb-3 hero-title">
          Bienvenue chez <span className="text-primary">WebCraft</span>
        </h1>

        <p className="lead mb-4 hero-text">
          Nous transformons vos idées en expériences digitales modernes.
        </p>

        <button 
          onClick={() => setActiveSection("contact")}
          className="btn btn-primary btn-lg rounded-pill px-4"
        >
          Nous contacter
        </button>
      </div>
    </section>
  );
}

export default HeroSection;
