const productos = document.querySelectorAll(".producto"); 
console.log(productos); 

productos.forEach((producto)=>{

    producto.addEventListener("mouseenter", ()=>{
        producto.classList.add("resaltado"); 
    }); 

    producto.addEventListener("mouseleave", ()=>{
        producto.classList.remove("resaltado"); 
    }); 

}); 


const estrellas = document.querySelectorAll(".estrella"); 
const tamanio = estrellas.length;
const  parrafoCalificacion = document.querySelector("#calificacionActual"); 
let calificacion = 0; 

estrellas.forEach((estrella) => {
    estrella.addEventListener("mouseenter", () =>{
        
        const valorSeleccionado = Number(estrella.dataset.valor); 
        
        estrellas.forEach((estrellaActual)=>{
            
            const valorSeleccionadoEstralla = Number(estrellaActual.dataset.valor); 
            
            if (valorSeleccionadoEstralla <= valorSeleccionado){
                estrellaActual.classList.add("activa");  
            }else{  
                estrellaActual.classList.remove("activa");  
            }
        }); 
    }); 

    estrella.addEventListener("click", ()=>{    
        calificacion = Number(estrella.dataset.valor); 
        parrafoCalificacion.textContent = `Calificacion: ${calificacion}`; 
    }); 

}); 

const botones = document.querySelectorAll(".tab-boton"); 
const contenido = document.querySelectorAll(".tab-contenido"); 
console.log(contenido); 

botones.forEach((boton) =>{
    boton.addEventListener("click", ()=>{

        const botonSeleccionado = boton.dataset.tab;  

        contenido.forEach((contenido)=>{

            const contenidoSleccionado = contenido.id;
            
            if (contenidoSleccionado === botonSeleccionado){
                contenido.style.display = "block"; 
            }else{
                contenido.style.display = "none"; 
            }

        }); 

        botones.forEach((botonunico) =>{

            const botonPintado = (botonunico.dataset.tab);  
        
            if(botonPintado === botonSeleccionado){
                botonunico.classList.add("activo");
            }else{
                  botonunico.classList.remove("activo"); 
            }
        }); 
    });
}); 


const inputNombre = document.querySelector("#nombreCheckout"); 
const inputEmail = document.querySelector("#emailCheckout"); 
const inputTelefono = document.querySelector("#telefonoCheckout"); 
const botonComprar = document.querySelector("#botonComprar"); 

const revisarInput= function(){
    
    const nombre = inputNombre.value.trim(); 
    const email = inputEmail.value;
    const telefono = inputTelefono.value;

    if(nombre.length>=3 && email.includes("@") && telefono.length === 8){
        botonComprar.disabled=false; 
    }else{
        botonComprar.disabled= true; 
    }
}; 


inputNombre.addEventListener("input", revisarInput);
inputEmail.addEventListener("input", revisarInput);
inputTelefono.addEventListener("input", revisarInput);



    

