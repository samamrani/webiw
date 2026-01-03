
import React from "react";

import web from "../Images/img.png"; 
import "../Styles/Services.css"

function Services() {
  const services = [
    { title: "Sites Web", desc: "Sites modernes et responsives." },
    { title: "Applications Web", desc: "Apps performantes et sécurisées." },
    { title: "Design & Branding", desc: "Identité visuelle professionnelle." },
  ];

  return (
    <div className="form container py-5 text-center">
      
  <img src={web} alt="Logo WEBIW" className="hero-logo w-5 mb-5" />
 
       
      <div className="row mt-4 ">
        {services.map((s, i) => (
          <div key={i} className="col-md-4 mb-3">
            <div className="card p-3 shadow">
              <h5>{s.title}</h5>
              <p>{s.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services;
