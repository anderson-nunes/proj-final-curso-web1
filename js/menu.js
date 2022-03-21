var show = true;

var menuSection = document.querySelector(".menu-section");
var menuToggle = menuSection.querySelector(".menu-toggle");

menuToggle.addEventListener("click", () => {
  document.body.style.overflow = show ? "hidden" : "initial";

  menuSection.classList.toggle("on", show);
  show = !show;
});

// Função para abrir modal //

function acao() {
  var modal = document.querySelector(".modal");

  modal.style.display = "block";
}

function fechar() {
  var modal = document.querySelector(".modal");

  modal.style.display = "none";
}
