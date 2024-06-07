import "../Imagens/LogoPetpuc.png";
import "./telaLogin.css";

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

        listaColab.forEach(item => {
            if (login === item.usuario && senha === item.senha) {
                colaboradorEncontrado = true;
                //valida o cargo e direciona para a página específica
                if (item.cargo === "Gerente") {
                    location.href = "exibicaodados.html";
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