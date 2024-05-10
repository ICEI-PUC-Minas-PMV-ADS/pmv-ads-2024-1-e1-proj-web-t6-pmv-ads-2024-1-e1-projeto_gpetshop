
// OPEN CLOSE
var openSlide = document.querySelector('#ativar');

openSlide.addEventListener('click', function () {

	var slide = document.querySelector('#slide');

	if (slide.style.display === 'block') {
		slide.style.display = 'none';
	} else {
		slide.style.display = 'block';
	}

})  

// DROPDOWN
function dropDownIdade(parameterIdade) {
	const elementsIdade = document.getElementsByClassName('dropDownIdade')[0];
	if (parameterIdade === 0) {
		elementsIdade.style.display = 'block';
		const translateIdade = ['0px', '0px, -10px'];
		setTimeout(function () {
			elementsIdade.style.transform = 'translate(' + translateIdade[parameterIdade] + ')';
		}, 0);
	} else {
		elementsIdade.style.display = 'none';
	}
}

function idade(idade) {
    const itemIdade = document.getElementById('itemIdade-' + idade).innerHTML;
    document.getElementsByTagName('input')[5].value = itemIdade;
}

function dropDownPorte(parameterPorte) {
	const elementsPorte = document.getElementsByClassName('dropDownPorte')[0];

	if (parameterPorte === 0) {
		elementsPorte.style.display = 'block';

		const translatePorte = ['0px', '0px, -10px'];
		setTimeout(function () {
			elementsPorte.style.transform = 'translate(' + translatePorte[parameterPorte] + ')';
		}, 0);
	} else {
		elementsPorte.style.display = 'none';
	}
}

function porte(porte) {
	const itemPorte = document.getElementById('itemPorte-' + porte).innerHTML;
	document.getElementsByTagName('input')[6].value = itemPorte;
}

function dropDownPelagem(parameterPelagem) {
	const elementsPelagem = document.getElementsByClassName('dropDownPelagem')[0];

	if (parameterPelagem === 0) {
		elementsPelagem.style.display = 'block';

		const translatePelagem = ['0px', '0px, -10px'];
		setTimeout(function () {
			elementsPelagem.style.transform = 'translate(' + translatePelagem[parameterPelagem] + ')';
		}, 0);
	} else {
		elementsPelagem.style.display = 'none';
	}
}

function pelagem(pelagem) {
	const itemPelagem = document.getElementById('itemPelagem-' + pelagem).innerHTML;
	document.getElementsByTagName('input')[7].value = itemPelagem;
}

function dropDownRaca(parameterRaca) {
	const elementsRaca = document.getElementsByClassName('dropDownRaca')[0];

	if (parameterRaca === 0) {
		elementsRaca.style.display = 'block';

		const translateRaca = ['0px', '0px, -10px'];
		setTimeout(function () {
			elementsRaca.style.transform = 'translate(' + translateRaca[parameterRaca] + ')';
		}, 0);
	} else {
		elementsRaca.style.display = 'none';
	}
}

function raca(raca) {
	const itemRaca = document.getElementById('itemRaca-' + raca).innerHTML;
	document.getElementsByTagName('input')[8].value = itemRaca;
}

function dropDownServico(parameterServico) {
	const elementsServico = document.getElementsByClassName('dropDownServico')[0];

	if (parameterServico === 0) {
		elementsServico.style.display = 'block';

		const translateServico = ['0px', '0px, -10px'];
		setTimeout(function () {
			elementsServico.style.transform = 'translate(' + translateServico[parameterServico] + ')';
		}, 0);
	} else {
		elementsServico.style.display = 'none';
	}
}

function servico(servico) {
	const itemServico = document.getElementById('itemServico-' + servico).innerHTML;
	document.getElementsByTagName('input')[9].value = itemServico;
}