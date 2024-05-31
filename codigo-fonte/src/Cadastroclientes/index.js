document.addEventListener("DOMContentLoaded", function () {
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
