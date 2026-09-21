//Instrucción: simulá hasta 3 intentos de conexión, usando un contador. 
// En cada intento, mostrá "Intento N de conexión...". 
// Si llega al intento 3 sin éxito, mostrá "No se pudo conectar después de 3 intentos".

let contador = 1; 

while (contador <= 3){
    console.log(`intento numero ${contador}`); 
    contador += 1; 
}

console.log(contador)
if(contador>3){
    console.log(`No se pudo conectar despues de 3 intentos`);
}
