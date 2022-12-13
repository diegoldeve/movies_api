let pagina = 1;
const anterior = document.getElementById('btnAnterior');
const siguiente = document.getElementById('btnSiguiente');

siguiente.addEventListener('click', () => {
	if(pagina<1000){
		pagina++;
		cargarPeliculas();
	}
})

anterior.addEventListener('click', () => {
	if(pagina>1){
		pagina--;
		cargarPeliculas();
	}
})

const cargarPeliculas = async () => {
	try {
		const res = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=722c36c95826b36140ae59d15235c9c7&language=es-MX&page=${pagina}`);
		const data = await res.json();
		let peliculas = '';
		data.results.forEach(pelicula => {
			peliculas += `
			<div class='pelicula'>
				<img src="https://image.tmdb.org/t/p/w500/${pelicula.poster_path}">
			<h3 class='titulo'>${pelicula.title}</h3>
			
			`
		});	
		document.getElementById('contenedor').innerHTML = peliculas;
	} catch (error) {
		console.log(error);
	}

}
cargarPeliculas();