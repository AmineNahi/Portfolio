document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector(".contact-form");

  if (!form) {
      console.error("Formulaire non trouvé ! Vérifiez que vous avez bien ajouté la classe 'contact-form' à votre <form>.");
      return;
  }

  form.addEventListener("submit", async function (event) {
      event.preventDefault(); // Empêche le rechargement immédiat de la page

      const formData = new FormData(form);

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
      }
  });
  const toggleDarkMode = document.getElementById("dark-mode-toggle");

    toggleDarkMode.addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");
    toggleDarkMode.textContent = document.body.classList.contains("dark-mode") ? "☀ Mode clair" : "🌙 Mode sombre";
});

});
