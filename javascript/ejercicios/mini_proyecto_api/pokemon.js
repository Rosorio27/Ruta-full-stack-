

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
 

const inputReto1 = document.querySelector("#inputValidacion"); 
const mensaje= document.querySelector("#mensajeValidacion");

console.log(inputReto1); 
console.log(mensaje); 

inputReto1.addEventListener("input", () => {
  if (inputReto1.value.length < 3) {
    mensaje.textContent = "Muy corto";
    mensaje.style.color = "red";
  } else {
    mensaje.textContent = "Válido";
    mensaje.style.color = "green";
  }
});

const tamanioMax = document.querySelector("#textareaContador"); 
const tamanioContador = document.querySelector("#contadorRestante"); 

tamanioContador.textContent = `Restan: ${tamanioMax.maxLength}`; 
  

tamanioMax.addEventListener("input", () =>{

    const mensajeUsuario = tamanioMax.value.length;
    tamanioContador.textContent = `Restan: ${tamanioMax.maxLength - mensajeUsuario}`; 
}); 

const inputReto3 = document.querySelector("#inputTareaReto3");
const botonreto3 = document.querySelector("#botonAgregarReto3"); 
const lista = document.querySelector("#listaReto3"); 
console.log(inputReto3); 
console.log(botonreto3); 
console.log(lista); 

botonreto3.addEventListener("click" , ()=>{

    const textoUsuario = inputReto3.value; 
    const nuevoli = document.createElement("li");
    const botonEliminar = document.createElement("button");  

    nuevoli.innerHTML= `${textoUsuario}`; 
    botonEliminar.textContent= "Eliminaar"; 

    nuevoli.appendChild(botonEliminar); 

    botonEliminar.addEventListener("click", ()=>{
        nuevoli.remove(); 
    }); 

    lista.appendChild(nuevoli); 

    inputReto3.value=""; 
}); 

const inputReto4 = document.querySelector("#inputFiltro"); 
const listaFiltro = document.querySelectorAll("#listaNombres li"); 
const arrayFIltro = Array.from(listaFiltro);

console.log(arrayFIltro); 

inputReto4.addEventListener("input", ()=>{

    const escritoUser = inputReto4.value.toLowerCase(); 

    arrayFIltro.forEach((filtrado) =>{

        const palabraArray = filtrado.textContent.toLowerCase(); 

        if ( palabraArray.includes(escritoUser)) {
            filtrado.style.display = "";  
        }else{
            filtrado.style.display = "none";  
        }
    }); 
});


const abrirModal = document.querySelector("#botonAbrirModal"); 
const contenido = document.querySelector("#modal"); 
const botonCerrar = document.querySelector("#botonCerrarModal"); 


abrirModal.addEventListener("click", () =>{
    contenido.style.display="block"; 
}); 

botonCerrar.addEventListener("click", () =>{
    contenido.style.display="none"; 
}); 


const botonAgregar = document.querySelectorAll(".agregar"); 
const carrito = document.querySelector("#carrito"); 
const parrafoPrecio = document.querySelector("#totalCarrito"); 
let suma = 0; 

botonAgregar.forEach((boton) =>{
    
    boton.addEventListener("click", () =>{

        const contenedor = boton.closest(".producto"); 
        const precio = Number(contenedor.dataset.precio); 
        const btnEliminar = document.createElement("button"); 

        suma += precio; 
          parrafoPrecio.textContent= `Total $${suma}`; 
        const nuevoliCarrito = document.createElement("li"); 
        nuevoliCarrito.innerHTML= `
        ${precio} 
        `; 
  
        btnEliminar.textContent="Eliminar"; 
        nuevoliCarrito.appendChild(btnEliminar); 

        btnEliminar.addEventListener("click", ()=>{
            nuevoliCarrito.remove(); 
            suma -= precio;
            parrafoPrecio.textContent= `Total $${suma}`; 
        }); 
        
         console.log(suma); 
        carrito.appendChild(nuevoliCarrito); 
    }); 
}); 