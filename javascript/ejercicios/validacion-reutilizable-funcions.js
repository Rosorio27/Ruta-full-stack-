//Reto 1 — Función de validación reutilizable para formularios
//Escribí una función esEmailValido(email) que devuelva true/false según si el string contiene un @ y al menos un . 
// después del @ (validación simple, no perfecta — pensá con .includes() que ya conocés). 
// Probala con "ana@mail.com" y "ana.mail.com" (sin arroba).


function esEmailValido(email){

const posicion = email.indexOf("@"); 
const validacion = email.includes("@"); 
const validacion2= email.includes(".", posicion); 

    if (validacion && validacion2){
        return true;  
    }else{
        return false; 
    }
}


console.log(esEmailValido("ramon.hola@com")); 

