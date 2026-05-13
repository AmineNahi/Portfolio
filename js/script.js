document.addEventListener("DOMContentLoaded", function () {
    // 1. Mise à jour de l'année dans le footer
    const yearEl = document.getElementById('year');
    if (yearEl) yearEl.textContent = new Date().getFullYear();

    // 2. Gestion du formulaire de contact (Formspree)
    const form = document.querySelector(".contact-form");
    
    if (form) {
        form.addEventListener("submit", async function (event) {
            event.preventDefault(); 
            const formData = new FormData(form);
            
            const submitButton = form.querySelector('button[type="submit"]');
            const originalText = submitButton.innerHTML;
            submitButton.innerHTML = "Envoi en cours... <i class='fas fa-spinner fa-spin'></i>";
            submitButton.disabled = true;

            try {
                let response = await fetch(form.action, {
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
                console.error(error);
            } finally {
                submitButton.innerHTML = originalText;
                submitButton.disabled = false;
            }
        });
    }

    // 3. Smooth scroll pour les liens d'ancrage
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});