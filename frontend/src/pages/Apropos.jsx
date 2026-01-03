
import React from "react";
import Github from "../components/Github";
import logo from "../Images/img.png";
import spa from "../Images/logo1.png"

function Apropos() {
  return (
    <section className="container py-5">
      <div className="container text-center">
        <div className="row">
          
          <div className="col-md-5">
           <h2 className="text-dark">À propos de </h2>
            <img src={spa} alt="img spa" style={{ height: "80px" }}/>
            <p className="text-muted">WEBIW est un projet personnel de développement web.
              Ce site me sert de laboratoire pour expérimenter, apprendre
              et construire des applications web complètes.
              Après avoir travaillé le backend et le frontend séparément,
              j’ai décidé de les réunir dans un même projet afin de mieux
              comprendre l’architecture globale d’une application web.
              WEBIW évolue au fil de mes apprentissages.
              Chaque fonctionnalité est une opportunité d’améliorer mes
              compétences techniques et ma compréhension du développement full-stack.
              Ce projet n’est pas une agence, mais un espace d’expérimentation,
              de progression et de partage autour du développement web.
            </p>
          </div>

        <div className="col-md-7">
          <img src={logo} alt="img logo" className="mt-5" style={{ height: "250px" }}/>
        </div>
        </div>

        <div className="row">
          <div className="col-md-5">
            <h3 className="fw-bold mb-3 text-dark">Un projet d’apprentissage concret</h3>
            <p className="text-muted">
              J’ai déjà travaillé le backend et le frontend séparément. <br />
              Aujourd’hui, je les réunis dans un même projet pour mieux
              comprendre <br />
              l’architecture complète d’une application web.
            </p>
          </div>
        <div className="col-md-7">
          <Github/>
        </div>
      </div>
      </div> 
    </section>
  );
}

export default Apropos;
