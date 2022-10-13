/*
Escuchar eventos en el documento html mediante
-Atributos escuchadores de evento
-Propiedad de evento del elemento
-AddEventListener
* */

const elementos = document.querySelectorAll(".element");

elementos.forEach(elemento => {
    elemento.addEventListener("click", () => {
        alert(`Opción seleccionada: ${elemento.textContent}`)
    })
})

