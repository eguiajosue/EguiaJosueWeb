/*
Escuchar eventos en el documento html mediante
-Atributos escuchadores de evento
-Propiedad de evento del elemento
-AddEventListener
* */

const elementos = document.querySelectorAll(".element");

for (const elemento of elementos) {
    elemento.addEventListener("click", () => {
        alert(`Opción seleccionada: ${elemento.textContent}`)
    })
}

