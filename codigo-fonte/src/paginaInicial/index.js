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


