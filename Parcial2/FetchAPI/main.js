const url = 'https://api.disneyapi.dev/characters?page=1';
const container = document.querySelector('.container');
const cards = document.querySelectorAll('.character-card');
const anterior = document.querySelector('.anterior');
const siguiente = document.querySelector('.siguiente');
const btnBuscar = document.querySelector('#btnBuscar');
let buscarNombre = document.querySelector('#name');

let paginaActual = 1;

const consultarPersonajes = (url) => {
	fetch(url)
			.then(response => response.json())
			.then(function (data) {
					container.innerHTML = data.data.map((personaje) => crearPersonaje(personaje)).join('');
				});
};

anterior.addEventListener('click' , () => {
	let url = `https://api.disneyapi.dev/characters?page=${--paginaActual}`;
	consultarPersonajes(url);
});

siguiente.addEventListener('click' , () => {
	let url = `https://api.disneyapi.dev/characters?page=${++paginaActual}`;
	consultarPersonajes(url);
});

btnBuscar.addEventListener('click' , (event) => {
	event.preventDefault();
	let nombre = buscarNombre.value;
	let url = `https://api.disneyapi.dev/character?name=${nombre}`;
	consultarPersonajes(url);
});

consultarPersonajes(url);

const crearPersonaje = ({ _id , name , imageUrl , films }) => {
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
	`;
};