// Contador de Cliques
let contador  = 0
let res = document.querySelector('section#result')


function contar() {
	contador ++ // É a mesma coisa que contador = contador + 1

	res.innerHTML = '<p> O contador está com'+ contador + 'cliques.'
}


function zerar() {

	contador = 0
	res.innerHTML = null
	
}

