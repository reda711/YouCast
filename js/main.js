// Menu mobile : ouvre et ferme la navigation.
const menuToggle = document.querySelector(".menu-toggle");
const mainNav = document.querySelector(".main-nav");

if (menuToggle && mainNav) {
  menuToggle.addEventListener("click", function () {
    const isOpen = mainNav.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded", isOpen);
    menuToggle.setAttribute("aria-label", isOpen ? "Fermer le menu" : "Ouvrir le menu");
  });

  mainNav.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", function () {
      mainNav.classList.remove("open");
      menuToggle.setAttribute("aria-expanded", "false");
    });
  });
}

// Démonstration du formulaire : vérifie les champs puis affiche une confirmation.
// Pour recevoir réellement les réponses, il faudra connecter un backend ou un service de formulaire.
const ideaForm = document.querySelector("#idea-form");
const formSuccess = document.querySelector("#form-success");

if (ideaForm && formSuccess) {
  ideaForm.addEventListener("submit", function (event) {
    event.preventDefault();

    if (!ideaForm.checkValidity()) {
      ideaForm.reportValidity();
      return;
    }

    formSuccess.hidden = false;
    formSuccess.scrollIntoView({ behavior: "smooth", block: "nearest" });
    ideaForm.querySelector(".form-submit").textContent = "Proposition validée ✓";
  });
}
