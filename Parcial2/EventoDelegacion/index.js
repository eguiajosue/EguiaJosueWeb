const container = document.querySelector(".container")
const cajas = document.querySelectorAll(".caja")

// container.addEventListener("click", (evento) => {
//     console.log(evento)
//     if (document.getElementById(evento.target.id).classList.contains("caja")) {
//         document.getElementById(evento.target.id).classList.toggle("warning")
//     }
// })

cajas.forEach(caja => {
    caja.addEventListener("click", () => {
        caja.classList.toggle("selected")
    })
})