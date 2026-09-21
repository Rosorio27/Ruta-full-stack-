const edadUsuario = "18";
const nombreUsuario = "Ramon";
const emailUsuario = "ana@mail.com";

let numero = Number(edadUsuario);

console.log(`Cuestionario de registro: `);
console.log(`Edad del registro requerido es 18 años`);
console.log(`Comprobando registro...`);

console.log(nombreUsuario.length);

if ( numero >= 18 && nombreUsuario.length > 0 && emailUsuario.length > 0 ){
    console.log(`Bienvenido al registro ${numero}`);
    console.log(`Usuario registrado`);
    console.log(`Nombre: ${nombreUsuario}`);
    console.log(`Edad: ${numero}`);
    console.log(`Email: ${emailUsuario}`);
}else{
    console.log(`Error en el registro de datos`); 
}



        
