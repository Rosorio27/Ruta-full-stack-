const producto = {nombre: "Auriculares", precio: 450, stock: 12}; 

//Accedé a las 3 propiedades con notación de punto, mostrando cada una con un console.log.

console.log(producto.nombre); 
console.log(producto.precio); 
console.log(producto.stock); 

producto.stock -= 9; 

console.log(producto.stock); 

if (producto.stock > 0){
    producto.disponible = true; 
}else{
    producto.disponible = false; 
}


console.log(producto.disponible); 


