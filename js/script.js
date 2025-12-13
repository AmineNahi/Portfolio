document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector(".contact-form");
  
    // 1. Gestion du formulaire de contact (Formspree)
    if (!form) {
        console.error("Formulaire non trouvé ! Vérifiez que vous avez bien ajouté la classe 'contact-form' à votre <form>.");
    } else {
        form.addEventListener("submit", async function (event) {
            event.preventDefault(); 
            const formData = new FormData(form);
            
            const submitButton = form.querySelector('button[type="submit"]');
            const originalText = submitButton.textContent;
            submitButton.textContent = "Envoi en cours...";
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
                // Rétablir le bouton
                submitButton.textContent = originalText;
                submitButton.disabled = false;
            }
        });
    }

    // 2. Gestion du Mode Sombre
    const toggleDarkMode = document.getElementById("dark-mode-toggle");
    if (toggleDarkMode) {
        toggleDarkMode.addEventListener("click", function () {
            document.body.classList.toggle("dark-mode");
            toggleDarkMode.innerHTML = document.body.classList.contains("dark-mode") ? "☀️ Mode clair" : "🌙 Mode sombre";
        });
        
        // Initialisation basée sur la préférence système (optionnel)
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            // document.body.classList.add('dark-mode'); // Décommenter si vous voulez initialiser en mode sombre selon l'OS
        }
    }

    // 3. Gestion du Menu Hamburger (Mobile)
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('.nav');
    if (menuToggle && nav) {
        menuToggle.addEventListener('click', function() {
            nav.classList.toggle('active');
            this.textContent = nav.classList.contains('active') ? '✖' : '☰';
        });

        // Fermer le menu après un clic sur un lien (UX mobile)
        nav.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                nav.classList.remove('active');
                menuToggle.textContent = '☰'; 
            });
        });
    }
  
});