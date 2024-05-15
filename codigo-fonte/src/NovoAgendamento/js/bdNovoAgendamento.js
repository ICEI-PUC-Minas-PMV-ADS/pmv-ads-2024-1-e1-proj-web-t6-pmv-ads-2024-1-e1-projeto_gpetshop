const clearFields = () => {
	const dataClient = document.querySelectorAll('.dataClient')
	dataClient.forEach(field => field.value = "")
}

const sendRequest = () => {
	if (isValidFields()) {
		const clientRequest = {
			cliente: {
				nome: document.getElementById('nameClient').value,
				email: document.getElementById('emailClient').value,
				celular: document.getElementById('foneClient').value,
			},

			pet: {
				nome: document.getElementById('namePet').value,
				idade: document.getElementById('idade').value,
				porte: document.getElementById('porte').value,
				pelagem: document.getElementById('pelagem').value,
				raça: document.getElementById('raca').value,
			},

			serviço: {
				servicos: document.getElementById('services').value,
			},

			agendamento: {
				horário: document.getElementById('dt-agenda').value,
			},

			observação: {
				observação: document.getElementById('text-value-obs').value,
			}
		}
		createOrUpdateClient(clientRequest)
		clearFields()
		alert("Enviando solicitação...")
	}
}


document.getElementById('aceitar')
	.addEventListener('click', sendRequest)

const isValidFields = () => {
	return document.getElementById('form').reportValidity()
}
