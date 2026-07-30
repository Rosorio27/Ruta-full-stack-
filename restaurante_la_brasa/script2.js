
const conteoImagenes = document.querySelectorAll("img"); 
console.log(conteoImagenes.length);

const h2_galeria = document.querySelector("#galeria h2"); 
h2_galeria.textContent = "Galeria de fotos"; 

const enlaces = document.querySelectorAll("nav a"); 

enlaces.forEach((enlace)=>{
   console.log(enlace.textContent); 
}); 


const licategorias =document.querySelector(".categoria:nth-child(3)");
const cuantosli = licategorias.querySelectorAll("li");
console.log(cuantosli.length); 


const paraFooter = document.querySelector(".footer");
const nuevoDiv = document.createElement("div"); 

nuevoDiv.innerHTML = `
<p> Siguenos en redes </p>
`; 

paraFooter.appendChild(nuevoDiv);

const arregloEntradas = [
   {nombre: "Comida rapida", precio: 4},
   {nombre: "Comida china", precio: 50}
]; 

const entradas = document.querySelector("#menu .categoria:first-child");
const ulentrada= entradas.querySelector("ul")
console.log(entradas); 
console.log(ulentrada);

arregloEntradas.forEach((nuevoli) =>{

   const nuevoul = document.createElement("li"); 
   nuevoul.textContent = `${nuevoli.nombre} - ${nuevoli.precio}`;

   ulentrada.appendChild(nuevoul);

}); 

const tituloHeader = document.querySelector("header h1");
   console.log(tituloHeader);

tituloHeader.addEventListener("click", () =>{

   tituloHeader.textContent= "!Bienvenidos!";

});

const footerResaltado = document.querySelector("footer");
console.log(footerResaltado);

footerResaltado.addEventListener("click", ()=>{

   footerResaltado.classList.add("resaltado"); 

}); 


//localStorage.setItem("nombre","ramon"); 
console.log(localStorage.getItem("nombre")); 

const listado = [
   {nombre: "tarea1", estado: "activo"},
   {nombre: "tarea2", estado: "desactivo"},
   {nombre: "tarea3", estado: "activo"}
]


if (localStorage.getItem("listado") === null){
  localStorage.setItem("listado", JSON.stringify(listado));
} 
console.log(listado);  

const arraylistado =  JSON.parse(localStorage.getItem("listado")); 

console.log(arraylistado);  