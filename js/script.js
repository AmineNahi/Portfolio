document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector(".contact-form");
    const toggleDarkMode = document.getElementById("dark-mode-toggle");
    const nav = document.querySelector('.nav');
    const menuToggle = document.querySelector('.menu-toggle');
    
    // --- 0. Détection des préférences utilisateur et initialisation ---
    if (toggleDarkMode) {
        const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
        
        // Initialisation du thème basé sur la préférence système
        if (prefersDark) {
            document.body.classList.add('dark-mode');
            toggleDarkMode.innerHTML = "☀️ Mode clair"; 
        } else {
            toggleDarkMode.innerHTML = "🌙 Mode sombre";
        }

        // 1. Gestion du Mode Sombre (Manuel)
        toggleDarkMode.addEventListener("click", function () {
            document.body.classList.toggle("dark-mode");
            toggleDarkMode.innerHTML = document.body.classList.contains("dark-mode") ? "☀️ Mode clair" : "🌙 Mode sombre";
        });
    }

    // --- 2. Gestion du formulaire de contact (Formspree) ---
    if (!form) {
        console.error("Formulaire non trouvé...");
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
                submitButton.textContent = originalText;
                submitButton.disabled = false;
            }
        });
    }

    // --- 3. Gestion du Menu Hamburger (Ouverture/Fermeture) ---
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