import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Styles/HeroSection.css";
import heroImage from "../Images/img.jpg"; 
import { Link } from "react-router-dom";

function HeroSection() {
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

    <Link to="/contact" className="btn btn-primary btn-lg rounded-pill px-4">
      Nous contacter
    </Link>
  </div>

  <svg
    className="hero-shape"
    viewBox="0 0 1440 100"
    preserveAspectRatio="none"
  >
    <path d="M0,0 C480,100 960,0 1440,100 L1440,0 L0,0 Z" fill="#ffffff" />
  </svg>
</section>

  );
}

export default HeroSection;
