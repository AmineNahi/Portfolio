import { useState } from 'react';

export default function Contact() {
  const [status, setStatus] = useState("Envoyer le message");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Envoi en cours...");
    const form = e.target;
    const formData = new FormData(form);

    try {
      const response = await fetch(form.action, {
        method: form.method,
        body: formData,
        headers: { "Accept": "application/json" }
      });

      if (response.ok) {
        alert("Merci ! Votre message a bien été envoyé.");
        form.reset();
      } else {
        alert("Erreur : Impossible d'envoyer le formulaire.");
      }
    } catch (error) {
      alert("Erreur réseau. Vérifiez votre connexion.");
    } finally {
      setStatus("Envoyer le message");
    }
  };

  return (
    <section id="contact" className="contact-section">
      <div className="card contact-card">
        <h2>Prêt à collaborer ?</h2>
        <p>Je suis actuellement à la recherche de nouveaux défis et de mes 3 premiers clients motivés. Discutons de votre projet avec des tarifs préférentiels !</p>
        <form action="https://formspree.io/f/mzzdgdqz" method="POST" onSubmit={handleSubmit} className="contact-form mt-4">
          <div className="form-row">
            <input type="text" name="name" placeholder="Votre nom" required />
            <input type="email" name="email" placeholder="Votre email" required />
          </div>
          <textarea name="message" rows="4" placeholder="Votre message" required></textarea>
          <button type="submit" className="btn btn-primary" disabled={status !== "Envoyer le message"}>
            {status} {status === "Envoyer le message" && <i className="fas fa-paper-plane"></i>}
          </button>
        </form>
      </div>
    </section>
  );
}