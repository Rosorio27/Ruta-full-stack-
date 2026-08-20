const boton = document.querySelector("#botonBuscar");
const textUsuario = document.querySelector("#inputPokemon");
const nuevoElemento = document.querySelector("#resultado");

const obtenerPokemon = async (nombre) => {

    try {
        const miconsulta = await fetch(`https://pokeapi.co/api/v2/pokemon/${nombre}/`);
        if(miconsulta.ok === false){

            console.log("Error en la solicitud"); 
        }else{
            const lectura = await miconsulta.json();
            return lectura;  
        }
    } catch (error) {
        console.log("Mensaje de error al buscar este pokemon", error); 
    }
};


boton.addEventListener("click", async () =>{
    const mensajeUsuario = textUsuario.value;
    const respuesta = await obtenerPokemon(mensajeUsuario); 

    console.log(respuesta); 

    if (respuesta){
        
    nuevoElemento.innerHTML = `
        <h2>${respuesta.name}</h2>
        <p>${respuesta.height}</p>
        <img src="${respuesta.sprites.front_default}" alt="Imagen de ${respuesta.name}"> 
    `;

    }else{

        console.log("No se obtuvo respuesta del servidor"); 
    }
});
 

