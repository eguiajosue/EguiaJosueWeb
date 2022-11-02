const url = 'https://api.disneyapi.dev/characters?page=1'
const container = document.querySelector('.container')
const cards = document.querySelectorAll('.character-card')
const anterior = document.querySelector('.anterior')
const siguiente = document.querySelector('.siguiente')
const btnBuscar = document.querySelector('#btnBuscar')
const formulario = document.querySelector('.busqueda')
let buscarNombre = document.querySelector('#name')

let paginaActual = 1

const getData = () => {

	fetch(`https://api.disneyapi.dev/characters`)
			.then(response => response.json())
			.then(data => {
				container.innerHTML = data.data.map( (personaje) => crearPersonaje(personaje)).join('');
			})
}

const anteriorPagina = () => {
	anterior.addEventListener('click', () => {
		fetch(`https://api.disneyapi.dev/characters?page=${--paginaActual}`)
				.then(response => response.json())
				.then(data => {
					container.innerHTML = data.data.map( (personaje) => crearPersonaje(personaje)).join('');
				})
	})
}

const siguientePagina = () => {
	siguiente.addEventListener('click', () => {
		fetch(`https://api.disneyapi.dev/characters?page=${++paginaActual}`)
				.then(response => response.json())
				.then(data => {
					container.innerHTML = data.data.map( (personaje) => crearPersonaje(personaje)).join('');
				})
	})
}

const buscarPorNombre = () => {
	btnBuscar.addEventListener("click", (event) => {
		event.preventDefault()
		let nombre = buscarNombre.value

		fetch(`https://api.disneyapi.dev/character?name=${nombre}`)
				.then(response => response.json())
				.then(data => {
					container.innerHTML = data.data.map( (personaje) => crearPersonaje(personaje)).join('');
				})
	})
}

const crearPersonaje = ({_id, name, imageUrl, films}) => {
	return `
		<div class="character-card">
			<div class="character-info">
				<h2 class="character-name">${name}</h2>
			</div>
			<div class="character-image">
				<img class="image" src="${imageUrl}" alt="Character image" >
			</div>
			<div class="character-films">
			</div>
		</div>
	`
}

getData()
anteriorPagina()
siguientePagina()
buscarPorNombre()