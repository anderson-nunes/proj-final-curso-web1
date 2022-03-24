//FUNÇÃO MENU HAMBURGUER

var show = true;

var menuSection = document.querySelector(".menu-section");
var menuToggle = menuSection.querySelector(".menu-toggle");

menuToggle.addEventListener("click", () => {
  document.body.style.overflow = show ? "hidden" : "initial";

  menuSection.classList.toggle("on", show);
  show = !show;
});

//FUNÇÃO PARA VALIDAR FORMULÁRIO

function validarFormulario() {
  var nome = document.getElementById("fid-nome").value;
  var email = document.getElementById("fid-email").value;

  if (nome == "" && email == "") {
    document.getElementById("fid-nome").style.border = "solid 0.7px red";
    document.getElementById("fid-email").style.border = "solid 0.7px red";
    document.getElementById("mensagem-erro").innerHTML =
      "INFORME TODOS OS CAMPOS";
    document.getElementById("mensagem-erro").style.color = "white";
  } else if (nome == "" && email != "") {
    document.getElementById("fid-nome").style.border = "solid 0.7px red";
    document.getElementById("fid-email").style.border = "none";
    document.getElementById("mensagem-erro").innerHTML = "INFORME O CAMPO NOME";
    document.getElementById("mensagem-erro").style.color = "white";
  } else if (nome != "" && email == "") {
    document.getElementById("fid-nome").style.border = "none";
    document.getElementById("fid-email").style.border = "solid 0.7px red";
    document.getElementById("mensagem-erro").innerHTML =
      "INFORME O CAMPO E-MAIL";
  } else {
    document.getElementById("fid-nome").style.border = "none";
    document.getElementById("fid-email").style.border = "none";
    document.getElementById("mensagem-erro").innerHTML = "DADOS ENVIADOS";
    document.getElementById("mensagem-erro").style.color = "white";
  }
}
