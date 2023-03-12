const formulario = document.querySelector('#todo-form');
const entrada = document.querySelector('#todo-input');
const lista = document.querySelector('#todo-list');

formulario.addEventListener('submit', function(evento) {
	evento.preventDefault();
	const textoEntrada = entrada.value.trim();
	if (textoEntrada.length === 0) {
		return;
	}

    //Este crea el li
const elementoLista = document.createElement('to-do-list-item');
	elementoLista.setAttribute('finished','false'); //Atributo finished empieza como falso porque no ha sido finalizado
    elementoLista.textContent = textoEntrada;
	elementoLista.addEventListener('click', function() {
        //Funciones de completar y de eliminar tarea, hay que hacerles click para que pasen las interacciones (addevenlistener click function)
		if (elementoLista.classList.contains('completado')) {
			const confirmarEliminar = confirm('¿Seguro de que desea eliminar la tarea?');
			if (confirmarEliminar) {
				elementoLista.remove();
			}
		} else {
			elementoLista.classList.toggle('completado'); //En el css se cambia el texto a subrayado
			elementoLista.setAttribute('finished','true'); //Artibuto finished termina como true para marcar
		} 

	});

	lista.appendChild(elementoLista);
	entrada.value = '';

});

customElements.define('to-do-list-item',webComponent,{extends:'li'});
