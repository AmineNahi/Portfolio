document.addEventListener('DOMContentLoaded', () => {
    
    // ===================================================
    // 1. GESTION DU MODE SOMBRE (Adapté à Bootstrap 5.3)
    // ===================================================

    const toggleButton = document.getElementById('dark-mode-toggle');
    const htmlElement = document.documentElement; // Cible la balise <html> pour Bootstrap
    const iconSpan = toggleButton.querySelector('.dark-mode-icon');
    
    // Fonction pour appliquer le thème et mettre à jour l'icône
    function applyTheme(theme) {
        // Applique le thème à l'élément HTML (mécanisme Bootstrap)
        htmlElement.setAttribute('data-bs-theme', theme);
        localStorage.setItem('theme', theme);
        
        // Mise à jour de l'icône du bouton
        iconSpan.textContent = theme === 'dark' ? '☀️' : '🌙';
    }

    // Initialisation du thème au chargement de la page
    const storedTheme = localStorage.getItem('theme');
    
    if (storedTheme) {
        applyTheme(storedTheme);
    } else {
        // Si aucun thème stocké, vérifie la préférence système
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        applyTheme(prefersDark ? 'dark' : 'light');
    }

    // Événement au clic sur le bouton de bascule
    if (toggleButton) {
        toggleButton.addEventListener('click', () => {
            const currentTheme = htmlElement.getAttribute('data-bs-theme');
            const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
            applyTheme(newTheme);
        });
    }

    const form = document.querySelector(".contact-form");

    if (!form) {
        console.error("Formulaire non trouvé ! La classe 'contact-form' est manquante sur votre <form>.");
        return; // Arrête l'exécution si le formulaire n'est pas là
    }

    form.addEventListener("submit", async function (event) {
        event.preventDefault(); // Empêche le rechargement de la page

        const formData = new FormData(form);

        try {
            // Utilise la méthode fetch pour envoyer les données au service (ici Formspree)
            let response = await fetch(form.action, {
                method: form.method,
                body: formData,
                headers: { "Accept": "application/json" }
            });

            if (response.ok) {
                alert("Merci ! Votre message a bien été envoyé. Je vous recontacterai rapidement.");
                form.reset(); // Réinitialise le formulaire après succès
            } else {
                // Affiche l'erreur si le service backend ne répond pas OK
                alert("Erreur : Impossible d'envoyer le formulaire. Veuillez réessayer plus tard.");
            }
        } catch (error) {
            // Affiche l'erreur en cas de problème réseau
            alert("Erreur réseau. Veuillez vérifier votre connexion.");
            console.error("Erreur lors de l'envoi du formulaire:", error);
        }
    });

    // Remarque : Le code pour le '.menu-toggle' a été supprimé car la navigation est gérée par Bootstrap JS.
});