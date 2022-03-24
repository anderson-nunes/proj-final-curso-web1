// MODAL FORMULÁRIO
function abrirModal() {
  var modal = document.querySelector(".modal");

  modal.style.display = "block";
}

function fecharModal() {
  var modal = document.querySelector(".modal");

  modal.style.display = "none";
}

// MODAL IMAGENS
function abrirModalImg(imagem) {
  var modalElement = document.getElementById("modal-img-overlay");
  var imgElement = document.getElementById("modal-img");
  imgElement.setAttribute("src", imagem);
  modalElement.style.display = "flex";
}

function fecharModalImg() {
  var modalElement = document.getElementById("modal-img-overlay");
  var imgElement = document.getElementById("modal-img");
  imgElement.setAttribute("src", "");
  modalElement.style.display = "none";
}

function init() {
  var modalElement = document.getElementById("modal-img-overlay");
  modalElement.addEventListener("click", function (e) {
    if (e.target == this) {
      fecharModalImg();
    }
  });
}

init();
