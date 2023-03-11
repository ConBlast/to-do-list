const formulario = document.querySelector('#todo-form');
const entrada = document.querySelector('#todo-input');
const lista = document.querySelector('#todo-list');

formulario.addEventListener('submit', function(eventoepicoxd) {
	eventoepicoxd.preventDefault();
	const textoEntrada = entrada.value.trim();

	if (textoEntrada.length === 0) {
		return;
	}

	const elementoLista = document.createElement('li');
	elementoLista.textContent = textoEntrada;
	lista.appendChild(elementoLista);
	entrada.value = '';
});