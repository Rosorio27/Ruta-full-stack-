const cliente = {
    nombre: "Marta", 
    direccion: {ciudad: "Tegucigalpa", codigoPostal: "11101"} 
}; 

console.log(cliente.direccion.ciudad); 

cliente.direccion.codigoPostal = 11102;

console.log(cliente.direccion.codigoPostal); 