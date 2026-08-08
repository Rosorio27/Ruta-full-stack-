const inputselect = document.querySelector("#inputTarea");
const boton = document.querySelector("#botonAgregar");
const listaTarea = document.querySelector("#listaTareas");

const arrayTareas = JSON.parse(localStorage.getItem("array_de_Tareas")) || [];

arrayTareas.forEach(objetoTarea => {

    const segundoli = document.createElement("li");
    segundoli.textContent = objetoTarea.tarea; 
    listaTarea.appendChild(segundoli);

});


boton.addEventListener("click", ()=>{
    if (inputselect.value === ""){
        console.log("ingresa un valor")
    }else{
        
        const textoUsuario = inputselect.value;
        const nuevoli = document.createElement("li");
        nuevoli.textContent = textoUsuario; 
        listaTarea.appendChild(nuevoli); 

        arrayTareas.push({tarea: textoUsuario});

        localStorage.setItem("array_de_Tareas", JSON.stringify(arrayTareas));
        inputselect.value = ""; 
    }
}); 


const contador = parseInt(localStorage.getItem("contador")) || 0; 

console.log(contador); 
let  nuevoncontador = contador + 1; 

localStorage.setItem("contador", (nuevoncontador)); 
console.log(nuevoncontador); 