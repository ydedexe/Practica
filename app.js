/*const APY_KEY = 'e531a3563420b19957842c17c7a19183';
const BASE_URL = 'https://api.themoviedb.org/3';
const IMAGE_URL = 'https://image.tmdb.org/t/p/w500';

const moviesgrid=document.getElementById('movies-grid')

const obtenerPeliculas=async()=>{
    const url = `${BASE_URL}/movie/popular?api_key=${APY_KEY}&language=es-ES`;
    const respuesta = await fetch(url);
    const datos = await respuesta.json();
    return datos.results;

}
const crearTarjeta = (pelicula)=>{
    const {title, release_date, vote_average,poster_path}=pelicula;
    const año = release_date?release_date.split('-')[0]:'N/A';
    const imagen = poster_path ? `${IMAGE_URL}${poster_path}` : '';
    const rating = vote_average ? vote_average.toFixed(1) : 'N/A';
    return `
        <article class="movie-card">
            <div class = "movie-card__poster">
                <span  class = "movie-card__image" src="${image}" alt="${title}" ></span>
            </div>
            <div class ="movie-card__content">
                <h3 class = "movie-card__title">${title}</h3>
                <p class = "movie-card__year">${año}</p>
        </article>
    `;
}

const iniciar =async()=>{
    console.log('Mostrar Pelicula');
    const peliculas =await obtenerPeliculas();
    const primera peliculas[0];
    console.log('Primera pelicula', primera);
    moviesgrid.innerHTML=crearTarjeta(primera);
    console.log('Primera pelicula renderizada');
}
iniciar();
/*const probarApi = async()=>{
    const url = `${BASE_URL}/movie/popular?api_key=${APY_KEY}&language=es-ES`;
    console.log ('Url de la peticion', url);
    const respuesta = await fetch(url);
    const datos = await respuesta.json();
    console.log('Respuesta completa', datos );
    console.log('Peliculas', datos.results);
    console.log('Total de resultados', datos.total_results);

}
probarApi();*/
/*
const APY_KEY = 'e531a3563420b19957842c17c7a19183';
const BASE_URL = 'https://api.themoviedb.org/3';
const IMAGE_URL = 'https://image.tmdb.org/t/p/w500';

const moviesgrid = document.getElementById('movies-grid');

const obtenerPeliculas = async () => {
    const url = `${BASE_URL}/movie/popular?api_key=${APY_KEY}&language=es-ES`;
    const respuesta = await fetch(url);
    const datos = await respuesta.json();
    return datos.results;
}

const crearTarjeta = (pelicula) => {
    const { title, release_date, vote_average, poster_path } = pelicula;
    const año = release_date ? release_date.split('-')[0] : 'N/A';
    const imagen = poster_path ? `${IMAGE_URL}${poster_path}` : ''; // Corregido el nombre de la variable de la imagen
    const rating = vote_average ? vote_average.toFixed(1) : 'N/A';
    return `
        <article class="movie-card">
            <div class="movie-card__poster">
                <img class="movie-card__image" src="${imagen}" alt="${title}">
            </div>
            <div class="movie-card__content">
                <h3 class="movie-card__title">${title}</h3>
                <p class="movie-card__year">${año}</p>
            </div>
        </article>
    `;
}

const iniciar = async () => {
    console.log('Mostrar Pelicula');
    mostrarLoading();
    try{
        const peliculas= await obtenerPeliculas();
        console.log(`${peliculas.length} peliculas obtenidas`);
        ocultarLoading();
        moviesgrid.innerHTML = peliculas.map(crearTarjeta).join('');
        console.log('Primera pelicula renderizada');
    }catch(error){
        console.log('Error',error);
        let mensaje = 'No se pudo cargar la pelicula';
        if(error.message.includes('401')){
            mensaje = 'Api key invalida, verifica tu clave';
        }else if(error.message.includes('fetch')) {
            mensaje='Error de red';
        }else if (error.message.includes('429')){
            mensaje= 'Existen demasiadas peticiones, espere un momento'
        }

        mostrarError();

    }
  
   
   // const primera = peliculas[3]; // Agregado el '=' que faltaba
    //console.log('Primera pelicula', primera);
   

}

iniciar();
const loading_Div = document.getElementById('loading');
const erroDiv=document.getElementById('error');
const errorMessage = document.getElementById('error-message');

const mostrarLoading = ()=>{
    loading_Div.style.display='flex';
    erroDiv.style.display='none';
    moviesgrid.innerHTML='';
}

const ocultarLoading = ()=>{
    loading_Div.style.display='none';

}
const mostrarError = (mensaje)=>{
    ocultarLoading();
    errorMessage=mensaje;
    erroDiv.style.display='flex';
    moviesgrid.innerHTML='';
}*/

/*const APY_KEY = 'e531a3563420b19957842c17c7a19183';
const BASE_URL = 'https://api.themoviedb.org/3';
const IMAGE_URL = 'https://image.tmdb.org/t/p/w500';

const moviesgrid = document.getElementById('movies-grid');

const obtenerPeliculas = async () => {
    const url = `${BASE_URL}/movie/popular?api_key=${APY_KEY}&language=es-ES`;
    const respuesta = await fetch(url);
    const datos = await respuesta.json();
    return datos.results;
}

const crearTarjeta = (pelicula) => {
    const { title, release_date, vote_average, poster_path } = pelicula;
    const año = release_date ? release_date.split('-')[0] : 'N/A';
    const imagen = poster_path ? `${IMAGE_URL}${poster_path}` : '';
    const rating = vote_average ? vote_average.toFixed(1) : 'N/A';
    return `
        <article class="movie-card">
            <div class="movie-card__poster">
                <img class="movie-card__image" src="${imagen}" alt="${title}">
            </div>
            <div class="movie-card__content">
                <h3 class="movie-card__title">${title}</h3>
                <p class="movie-card__year">${año}</p>
            </div>
        </article>
    `;
}

const iniciar = async () => {
    console.log('Mostrar Pelicula');
    mostrarLoading();
    try {
        const peliculas = await obtenerPeliculas();
        console.log(`${peliculas.length} peliculas obtenidas`);
        ocultarLoading();
        moviesgrid.innerHTML = peliculas.map(crearTarjeta).join('');
        console.log('Peliculas renderizadas');
    } catch (error) {
        console.log('Error', error);
        let mensaje = 'No se pudo cargar la pelicula';
        if (error.message.includes('401')) {
            mensaje = 'Api key invalida, verifica tu clave';
        } else if (error.message.includes('fetch')) {
            mensaje = 'Error de red';
        } else if (error.message.includes('429')) {
            mensaje = 'Existen demasiadas peticiones, espere un momento';
        }

        mostrarError(mensaje); // <-- Corregido: se pasa el mensaje como argumento
    }
}

iniciar();

const loading_Div = document.getElementById('loading');
const erroDiv = document.getElementById('error');
const errorMessage = document.getElementById('error-message');

const mostrarLoading = () => {
    loading_Div.style.display = 'flex';
    erroDiv.style.display = 'none';
    moviesgrid.innerHTML = '';
}

const ocultarLoading = () => {
    loading_Div.style.display = 'none';
}

const mostrarError = (mensaje) => {
    ocultarLoading();
    errorMessage.textContent = mensaje; // <-- Corregido: se usa .textContent en lugar de reasignar la constante
    erroDiv.style.display = 'flex';
    moviesgrid.innerHTML = '';
}*/

const APY_KEY = 'e531a3563420b19957842c17c7a19183';
const BASE_URL = 'https://api.themoviedb.org/3';
const IMAGE_URL = 'https://image.tmdb.org/t/p/w500';

const moviesgrid = document.getElementById('movies-grid');
const loading_Div = document.getElementById('loading');
const erroDiv = document.getElementById('error');
const errorMessage = document.getElementById('error-message');

const mostrarLoading = () => {
    loading_Div.style.display = 'flex';
    erroDiv.style.display = 'none';
    moviesgrid.innerHTML = '';
}

const ocultarLoading = () => {
    loading_Div.style.display = 'none';
}

const mostrarError = (mensaje) => {
    ocultarLoading();
    errorMessage.textContent = mensaje;
    erroDiv.style.display = 'flex';
    moviesgrid.innerHTML = '';
}

const obtenerPeliculas = async () => {
    const url = `${BASE_URL}/movie/popular?api_key=${APY_KEY}&language=es-ES`;
    const respuesta = await fetch(url);
    const datos = await respuesta.json();
    return datos.results;
}

const crearTarjeta = (pelicula) => {
    const { title, release_date, vote_average, poster_path } = pelicula;
    const año = release_date ? release_date.split('-')[0] : 'N/A';
    const imagen = poster_path ? `${IMAGE_URL}${poster_path}` : '';
    const rating = vote_average ? vote_average.toFixed(1) : 'N/A';
    return `
        <article class="movie-card">
            <div class="movie-card__poster">
                <img class="movie-card__image" src="${imagen}" alt="${title}">
            </div>
            <div class="movie-card__content">
                <h3 class="movie-card__title">${title}</h3>
                <p class="movie-card__year">${año}</p>
            </div>
        </article>
    `;
}

const iniciar = async () => {
    console.log('Mostrar Pelicula');
    mostrarLoading();
    try {
        const peliculas = await obtenerPeliculas();
        console.log(`${peliculas.length} peliculas obtenidas`);
        ocultarLoading();
        moviesgrid.innerHTML = peliculas.map(crearTarjeta).join('');
        console.log('Peliculas renderizadas');
    } catch (error) {
        console.log('Error', error);
        let mensaje = 'No se pudo cargar la pelicula';
        if (error.message.includes('401')) {
            mensaje = 'Api key invalida, verifica tu clave';
        } else if (error.message.includes('fetch')) {
            mensaje = 'Error de red';
        } else if (error.message.includes('429')) {
            mensaje = 'Existen demasiadas peticiones, espere un momento';
        }

        mostrarError(mensaje);
    }
}

iniciar();

const xd = document.getElementById('header');
console.log('header por ID', xd);


const nuevo = document.createElement('div');
nuevo.textContent = 'HOLA BRO';
console.log('Nuevo elemento creado', nuevo);