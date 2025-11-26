import React, { useState } from "react"; // ajoute useState ici
import { Helmet } from "react-helmet";
import "../Styles/Contact.css"
import emailjs from "emailjs-com";

function Contact() {
  // ✅ Ici : au début de ton composant
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
  emailjs.sendForm(
    "SERVICE_ID",   // ton Service ID EmailJS
    "TEMPLATE_ID",  // ton Template ID EmailJS
    e.target,
    "USER_ID"       // ton User ID EmailJS
  ).then(
    (result) => {
      console.log(result.text);
      setSubmitted(true);
    },
    (error) => {
      console.log(error.text);
    }
  );
};
  

  return (
    <>
      <Helmet>
        <title>WEBIW - Contact</title>
        <meta name="description" content="Contactez WebCraft pour vos projets web, applications et identité visuelle." />
      </Helmet>
       

      <section className="top" id="contact"> 
        <div className="container text-center" data-aos="fade-up">
          <h1 className="display-6 fw-bold m-5 text-primary">Nous Contacter</h1>
        </div> 
 
        <div className="row justify-content-center">
          <div className="col-md-8">
         
            <form className="p-4 border rounded shadow-lg bg-light" onSubmit={handleSubmit}>
              <div className="mb-2">
                <label htmlFor="name" className="form-label">Nom</label>
                <input type="text" className="form-control" id="name" placeholder="Votre nom" required />
              </div>
              <div className="mb-2">
                <label htmlFor="tel" className="form-label">Tel</label>
                <input type="tel" className="form-control" id="tel" placeholder="Votre tel" required />
              </div>
              <div className="mb-2">
                <label htmlFor="email" className="form-label">Email</label>
                <input type="email" className="form-control" id="email" placeholder="Votre email" required />
              </div>
              <div className="mb-2">
                <label htmlFor="message" className="form-label">Message</label>
                <textarea className="form-control" id="message" rows="3" placeholder="Votre message" required></textarea>
              </div>
              <div className="d-flex justify-content-center">
                <button type="submit" className="btn btn-danger btn-lg rounded-pill px-5">Envoyer</button>
              </div>

            
            </form>
          
              {submitted && (
                <div className="alert alert-success mt-3">
                  Merci ! Votre message a été envoyé.
                </div>
              )}
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
