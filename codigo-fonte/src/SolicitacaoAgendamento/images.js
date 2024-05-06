import petPucSVG from './img/petPuc.svg';
import user from './icons/icon_user.svg';
import phone from './icons/phone.svg';
import email from './icons/icon_user_email.svg';
import dog from './icons/Dog.svg';
import pelagem from './icons/icon_pet_hair.svg';
import dogIdade from './icons/dog_years.svg';
import dogPorte from './icons/icon_porte_dog.svg';
import menuSanduiche from './icons/menu_sanduiche.svg';
import dogRaca from './icons/dogRaca.svg';
import dogObs from './icons/icon_obs.svg';

export function setImages() {
    setImageInHeader();
    setImageInName();
    setImageInPhone();
    setImageInEmail();
    setImagePetName();
    setImagePelagem();
    setImageRaca();
    setImageIdade();
    setImagePorte();
    setImageObs();
}

function setImageSVG(imageSource) {
    const img = document.createElement("img");
    img.src = imageSource;  
    return img;
}
  
function setImageInHeader() {
    const imageSVG = setImageSVG(petPucSVG);
    const imageMenuSanduicheSVG = setImageSVG(menuSanduiche);
    const header = document.querySelector(".header");
    const titleHeader = document.getElementById("title-header");
    header.insertBefore(imageMenuSanduicheSVG, titleHeader);
    header.appendChild(imageSVG);

}

function setImageInName() {
    const imageSVG = setImageSVG(user);
    const name = document.getElementById("name");
    const firstChild = name.firstChild;
    name.insertBefore(imageSVG,firstChild);
}

function setImageInPhone() {
    const imageSVG = setImageSVG(phone);
    const name = document.getElementById("phone");
    const firstChild = name.firstChild;
    name.insertBefore(imageSVG,firstChild);
}

function setImageInEmail() {
    const imageSVG = setImageSVG(email);
    const name = document.getElementById("email");
    const firstChild = name.firstChild;
    name.insertBefore(imageSVG,firstChild);
}

function setImagePetName() {
    const imageSVG = setImageSVG(dog);
    const container = document.getElementById("pet-name");
    const containerPai = container.parentNode;
    containerPai.insertBefore(imageSVG, container);
}

function setImagePelagem() {
    const imageSVG = setImageSVG(pelagem);
    const container = document.getElementById("pelagem");
    const containerPai = container.parentNode;
    containerPai.insertBefore(imageSVG, container);
}

function setImageRaca() {
    const imageSVG = setImageSVG(dogRaca);
    const container = document.getElementById("raca");
    const containerPai = container.parentNode;
    containerPai.insertBefore(imageSVG, container);
}

function setImageIdade() {
    const imageSVG = setImageSVG(dogIdade);
    const container = document.getElementById("idade");
    const containerPai = container.parentNode;
    containerPai.insertBefore(imageSVG, container);
}

function setImagePorte() {
    const imageSVG = setImageSVG(dogPorte);
    const container = document.getElementById("porte");
    const containerPai = container.parentNode;
    containerPai.insertBefore(imageSVG, container);
}

function setImageObs() {
    const imageSVG = setImageSVG(dogObs);
    const container = document.getElementById("observacoes");
    const containerPai = container.parentNode;
    containerPai.insertBefore(imageSVG, container);
}