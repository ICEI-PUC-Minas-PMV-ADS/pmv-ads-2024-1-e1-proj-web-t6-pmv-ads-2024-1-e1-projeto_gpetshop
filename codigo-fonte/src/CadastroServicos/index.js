import "./CadastroServicos.css";
import "./ListagemCadastroServicos.css";
import logopetpuc from "../assets/svg/petPuc.svg"
// OPEN CLOSE
var openSlide = document.querySelector("#ativar");

openSlide.addEventListener("click", function () {
  var slide = document.querySelector("#slide");

  if (slide.style.display === "block") {
    slide.style.display = "none";
  } else {
    slide.style.display = "block";
  }
});

