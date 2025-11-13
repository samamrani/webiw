  import React from "react";
  import { Helmet } from "react-helmet";
  import "../Styles/Contact.css"

  function Contact() {
    return (
      <>
        <Helmet>
          <title>WebCraft - Contact</title>
          <meta
            name="description"
            content="Contactez WebCraft, votre agence web, pour discuter de vos projets de création de sites, applications web et identité visuelle."
          />
        </Helmet>

      <section className="top"> 
        <div className="container text-center" data-aos="fade-up">
          <h1 className="display-6 fw-bold mb-2 text-primary">Nous Contacter</h1>
        </div> 

        <div className="row justify-content-center">
          <div className="col-md-8">
            <form className="p-4 border rounded shadow-lg bg-light">
              <div className="mb-2">
                <label htmlFor="name" className="form-label">Nom</label>
                <input type="text" className="form-control" id="name" placeholder="Votre nom" />
              </div>
               <div className="mb-2">
                <label htmlFor="tel" className="form-label">Tel</label>
                <input type="text" className="form-control" id="tel" placeholder="Votre tel" />
              </div>
              <div className="mb-2">
                <label htmlFor="email" className="form-label">Email</label>
                <input type="email" className="form-control" id="email" placeholder="Votre email" />
              </div>
              
              <div className="mb-2">
                <label htmlFor="message" className="form-label">Message</label>
                <textarea className="form-control" id="message" rows="3" placeholder="Votre message"></textarea>
              </div>
              <div className="d-flex justify-content-center">
              <button type="submit" className="btn btn-primary btn-lg rounded-pill px-5 ">Envoyer</button>
             </div>
            </form>
          </div>
        </div>
      </section>
      
    </>
  );
}

export default Contact;
