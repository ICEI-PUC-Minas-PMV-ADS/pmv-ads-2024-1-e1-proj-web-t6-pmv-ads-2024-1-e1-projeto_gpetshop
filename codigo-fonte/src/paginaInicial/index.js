/* import "./index.css";
/* import "../assets/fonts.css";
import depoimentos1 from  "../Imagens/depoimentos1.png";
import depoimentos2 from  "../Imagens/depoimentos2.png";
import depoimentos3 from  "../Imagens/depoimentos3.png";
import depoimentos4 from  "../Imagens/depoimentos4.png";
import depoimentos5 from  "../Imagens/depoimentos5.png";
import depoimentos6 from  "../Imagens/depoimentos6.png";
import icon_facebook from  "../Imagens/icon_facebook.png";
import icon_instagram from  "../Imagens/icon_instagram.png";
import icon_whatsapp from  "../Imagens/icon_whatsapp.png";
import imagem_quem_somos from  "../Imagens/ImagemQuemSomos.png";
import logo_pet_puc from  "../Imagens/LogoPetpuc.png";
import servico_banho from  "../Imagens/servicoBanho.png";
import servico_tosa from  "../Imagens/servicoTosa.png"; */


let lista = localStorage.getItem("minhaLista")
const formulario = document.querySelector("form");

if (lista) {
    lista = JSON.parse(lista);
} else {
    lista = []
}

formulario.addEventListener("submit", function (e) {
    e.preventDefault();
    let novaPessoa = new Object();
    novaPessoa.nome = this.nome.value;
    novaPessoa.email = this.email.value;
    novaPessoa.telefone = this.telefone.value;
    novaPessoa.mensagem = this.mensagem.value;

    lista.push(novaPessoa);

    lista.forEach((item, index) => {
        item.id = index + 1;
    })

    this.reset();

    localStorage.setItem("minhaLista", JSON.stringify(lista));


});

function formatarTelefone(input) {
    var telefone = input.value.replace(/\D/g, '');

    if(telefone[2]== 9) {
        telefone = telefone.replace(/(\d{2})(\d{5})(\d{4})/, '($1)$2-$3');
    } else {
        telefone = telefone.replace(/(\d{2})(\d{4})(\d{4})/, '($1)$2-$3');
    }

    input.value = telefone
}


