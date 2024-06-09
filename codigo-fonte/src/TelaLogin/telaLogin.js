import "../Imagens/LogoPetpuc.png";
import "./telaLogin.css";

window.addEventListener('DOMContentLoaded', () => {
    onclickBtnLogar()
    /* const a = [
        {
            usuario: "joao",
            senha: "1234",
            cargo: "Gerente"

        }
    ]
    localStorage.setItem('listaColab', JSON.stringify(a)) */
})

function onclickBtnLogar() {
    let btnLogar = document.getElementById('Btn-logar');
    btnLogar.addEventListener('click', () => {
        logar()
    })

}

function logar() {
    var login = document.getElementById('user-field').value;
    var senha = document.getElementById("password-field").value;

    // Recupera a lista do localStorage
    var listaColab = localStorage.getItem("listaColab");

    if (listaColab) {
        // Converte a string JSON em um array de objetos
        listaColab = JSON.parse(listaColab);

        // Percorre a lista de colaboradores e valida o login e a senha
        let colaboradorEncontrado = false;

        let colaborador = listaColab.find(item => item.usuario == login)
        if (colaborador) {

            colaboradorEncontrado = true
            switch (colaborador.cargo) {
                case "Gestor":
                    window.location.href = "/codigo-fonte/dist/cadastroServicos/CadastroServicos.html";
                    break;
                case "Atendente":
                    window.location.href = "/codigo-fonte/dist/listagemSolicitacoes/listagemSolicitacoes.html";
                    break;
                case "Banhista":
                    window.location.href = "/codigo-fonte/dist/visualizacaoPainelServicosAgendados/visualizacaoPainelServicosAgendados.html";
                    break;


                default:
                    break;
            }
        }



        if (!colaboradorEncontrado) {
            alert("Login ou senha incorretos.");
            // Limpa os campos de entrada
            document.getElementById('user-field').value = '';
            document.getElementById("password-field").value = '';
        }
    } else {
        alert("Nenhuma lista encontrada no localStorage.");
    }
}



/* function logar() {
    var login = document.getElementById('user-field').value;
    var senha = document.getElementById("password-field").value;

    // Recupera a lista do localStorage
    var listaColab = localStorage.getItem("listaColab");

    if (listaColab) {
        // Converte a string JSON em um array de objetos
        listaColab = JSON.parse(listaColab);

        // Percorre a lista de colaboradores e valida o login e a senha
        let colaboradorEncontrado = false;

        listaColab.forEach(item => {
            if (login === item.usuario && senha === item.senha) {
                colaboradorEncontrado = true;
                //valida o cargo e direciona para a página específica
                if (item.cargo === "Gerente") {
                    window.location.href = "/codigo-fonte/dist/cadastroServicos/CadastroServicos.html";
                } if (item.cargo === "Banhista") {
                    location.href = "index.html";
                } if (item.cargo === "Atendente") {
                    location.href = "index.html";
                }
            }
        });

        if (!colaboradorEncontrado) {
            alert("Login ou senha incorretos.");
            // Limpa os campos de entrada
            document.getElementById('user-field').value = '';
            document.getElementById("password-field").value = '';
        }
    } else {
        alert("Nenhuma lista encontrada no localStorage.");
    }
}

let btnLogar = document.getElementById('Btn-logar');
    btnLogar.addEventListener('click', logar) */