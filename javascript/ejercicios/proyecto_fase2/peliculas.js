const API_KEY="d21422e6"; 
const inputBusqueda = document.querySelector("#inputPelicula");
const botonBuscar = document.querySelector("#botonBuscar");
const parrafoEstado = document.querySelector("#mensajeEstado");
const contenerResultados = document.querySelector("#resultadosBusqueda");
const contenedorFavoritos = document.querySelector("#listaFavoritos");


const buscarPeliculas = async (busqueda) => {

    try {
        
        const pedido = await fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${busqueda}`);
        const datos = await pedido.json(); 

        return datos; 

    } catch (error) {
        
        console.log("Error de la peticion de peliculas", error); 
    }
};

botonBuscar.addEventListener("click", async() =>{

    const texto = inputBusqueda.value; 
    const busqueda = await buscarPeliculas(texto); 
    
    console.log(busqueda.search); 

}); 