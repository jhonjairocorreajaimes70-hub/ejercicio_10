// Capturamos todos los botones y los bloques de contenido del DOM
const botones = document.querySelectorAll(".mi-boton");
const contenidos = document.querySelectorAll(".bloque-contenido");

// Recorremos cada botón usando un ciclo forEach
botones.forEach(function (boton) {

    // Escuchamos el evento clic en cada uno de los botones de las pestañas
    boton.addEventListener("click", function () {

        // Primero barremos todos los botones para quitarles la clase 'activa'
        botones.forEach(function (btn) {
            btn.classList.remove("activa");
        });

        // Luego barremos todos los contenidos para ocultarlos quitándoles la clase 'activa'
        contenidos.forEach(function (contenido) {
            contenido.classList.remove("activa");
        });

        // Le añadimos la clase 'activa' únicamente al botón que el usuario acaba de presionar
        boton.classList.add("activa");

        // Obtenemos el número identificador guardado en el atributo data-pestana del botón
        const numero = boton.dataset.pestana;

        // Buscamos el bloque de contenido exacto que coincide con ese mismo número
        const contenidoSeleccionado = document.querySelector(
            '.bloque-contenido[data-contenido="' + numero + '"]'
        );

        // Activamos y mostramos en pantalla el contenido correspondiente
        contenidoSeleccionado.classList.add("activa");

    });

});