import React from "react";
import { Link } from "react-router-dom";
import img from "../Images/logo1.png"; 
import web from "../Images/img.png"; 
import "../Styles/Home.css"

function Home() {
  return (
    <section 
      className="hero-section text-center d-flex flex-column align-items-center justify-content-center"
      style={{
        backgroundImage: `url(${web})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
        color: "#fff", 
        
      }}
    >
      <img src={img} alt="Logo WEBIW" className="hero-logo mb-5" />

      <h1 className="fw-bold mb-5">
        Développement Web Frontend & Backend
      </h1>

      <p className="lead mb-5">
        Je conçois des applications web complètes en reliant <br />
        le frontend et le backend dans des projets concrets.
      </p>

      <div className="d-flex justify-content-center gap-3">
        <Link to="/apropos" className="btn btn-outline-danger btn-lg mb-5">
          Pourquoi ce site
        </Link>
      </div>
    </section>
  );
}

export default Home;
