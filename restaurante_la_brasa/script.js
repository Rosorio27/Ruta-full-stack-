

const titulo = document.querySelector("#titulo"); 

titulo.textContent="La hora del te"; 
titulo.classList.add("resaltado");
titulo.classList.toggle("resaltado"); 

const nameInput = document.querySelector("#name");
console.log(nameInput.required); 

const h2_menu = document.querySelector("#menu h2");
console.log(h2_menu.textContent); 

const enlaces = document.querySelectorAll("li");
console.log(enlaces.length);

const tipoBoton = document.querySelector("#boton");
console.log(tipoBoton.textContent);
console.log(tipoBoton.type);

const boton1 = document.querySelector(".buttones");
boton1.classList.add("resaltado"); 
boton1.classList.remove("resaltado"); 

/* Crear un elemento nuevo */

const nuevaTarjeta = document.querySelector(".contenedorTarjetas"); 

const nuevosPlatos = [
    { nombre: "Sopa de mariscos", precio: 6, imagen: "https://placehold.co/300" },
    { nombre: "Tacos al pastor", precio: 4.5, imagen: "https://placehold.co/300"}
];

nuevosPlatos.forEach((plato) => {
    
    const nuevoDiv = document.createElement("div");  

    nuevoDiv.innerHTML = `
        <h3>${plato.nombre}</h3>
        <img src="${plato.imagen}" alt="Imagen de ${plato.nombre}">   
        <p>Precio especial: $ ${plato.precio}</p>
        <button class="buttones">Ver mas</button>
    `;

    nuevoDiv.classList.add("tarjeta"); 
    nuevaTarjeta.appendChild(nuevoDiv); 

}); 


const todasTarjetas = document.querySelectorAll(".tarjeta"); 
console.log(todasTarjetas.length); 

document.querySelector(".tarjeta").remove(); 

const todasCaterorias = document.querySelectorAll(".categoria"); 
const arrayCategorias = Array.from(todasCaterorias); 
const postresSeleccion = arrayCategorias.filter((categoria) =>categoria.querySelector("h3").textContent === "Postres");
const categoriaPostres = postresSeleccion[0]; 
const listaPostres = categoriaPostres.querySelector("ul"); 

const nuevosPostres = [
    {nombre: "Curuleca", precio: 5},
    {nombre: "papelote", precio: 10}
]; 

nuevosPostres.forEach((postre) =>{

    const nuevoLi = document.createElement("li"); 

    nuevoLi.textContent = `${postre.nombre} — L.${postre.precio}`; 
 
    nuevoLi.classList.add("categoria");
    listaPostres.appendChild(nuevoLi); 
}); 

const todoP = document.querySelectorAll(".tarjeta p");
const arrayP = Array.from(todoP);
const primerBoton = document.querySelector(".buttones");  

primerBoton.addEventListener("click",() =>{
    primerBoton.textContent = "Delicioso"; 
}); 

const Boton2 = document.querySelector("#botonCostillas"); 

Boton2.addEventListener("click", () =>{
    Boton2.textContent = "ELEGIDO"; 
    Boton2.classList.add("resaltado"); 
});

// paso 1: necesito seleccionar el formulario completo (pista: querySelector("form"))
const formularioSelect = document.querySelector("form");
console.log(formularioSelect); 

formularioSelect.addEventListener("submit", (event)=>{
    event.preventDefault(); 

    const entrada = document.querySelector("#name"); 
    console.log(`Gracias, ${entrada.value}, por contactarnos`); 

    const submit = document.querySelector("submit"); 
    submit.classList.add("resaltado"); 
}); 

 