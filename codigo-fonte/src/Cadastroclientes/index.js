import "./index.css";
import "../Imagens/agenda.png";
import "../Imagens/cadastro.png";
import "../Imagens/file.png";
import "../Imagens/home.png";
import "../Imagens/power.png";
import "../Imagens/suporte.png";
document.addEventListener("DOMContentLoaded", function () {
  getPermitions()
  const addInputButtons = document.querySelectorAll(".plus-pet-icon");

  addInputButtons.forEach(function (button) {
    button.addEventListener("click", function (event) {
      event.preventDefault();

      const divPetAdd = document.getElementById("div-pet-add");
      const newDivPetAdd = divPetAdd.cloneNode(true);

      const plusPetIcon = newDivPetAdd.querySelector(".plus-pet-icon");
      if (plusPetIcon) {
        plusPetIcon.remove();
      }

      newDivPetAdd
        .querySelectorAll('input[type="text"]')
        .forEach(function (input) {
          input.value = "";
        });

      divPetAdd.parentNode.insertBefore(newDivPetAdd, divPetAdd.nextSibling);
    });
  });
});

function getPermitions() {
  let userJson = localStorage.getItem('user')
  let user = JSON.parse(userJson)
  switch (user.cargo) {
      case 'Banhista':
      case 'Atendente':
          document.getElementById('cadastros').style.display = 'none'
          document.getElementById('relatorios').style.display = 'none'
          break;

      default:
          break;
  }

}

var openSlide = document.querySelector("#ativar");

openSlide.addEventListener("click", function (event) {
    event.stopPropagation(); // Impede que o clique se propague para o documento
    var slide = document.querySelector("#slide");

    if (slide.style.display === "block") {
        slide.classList.remove("animate__fadeInLeft");
        slide.classList.add("animate__fadeOutLeft");

        slide.addEventListener("animationend", function handleAnimationEnd() {
            slide.style.display = "none";
            slide.classList.remove("animate__fadeOutLeft");
            slide.removeEventListener("animationend", handleAnimationEnd);
        });
    } else {
        slide.style.display = "block";
        slide.classList.add("animate__fadeInLeft");
        slide.classList.remove("animate__fadeOutLeft");

        slide.addEventListener("animationend", function handleAnimationEnd() {
            slide.classList.remove("animate__fadeInLeft");
            slide.removeEventListener("animationend", handleAnimationEnd);
        });
    }
});

// Evento de clique no documento para fechar a barra lateral quando clicar fora dela
document.addEventListener("click", function (event) {
    var slide = document.querySelector("#slide");

    // Verifica se o clique foi fora da barra lateral e do botão de ativação
    if (!slide.contains(event.target) && !openSlide.contains(event.target) && slide.style.display === "block") {
        slide.classList.remove("animate__fadeInLeft");
        slide.classList.add("animate__fadeOutLeft");

        slide.addEventListener("animationend", function handleAnimationEnd() {
            slide.style.display = "none";
            slide.classList.remove("animate__fadeOutLeft");
            slide.removeEventListener("animationend", handleAnimationEnd);
        });
    }
});