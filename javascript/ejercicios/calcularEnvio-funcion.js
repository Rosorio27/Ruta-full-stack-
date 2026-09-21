//Reto 2 — Función que calcula el precio de envío según el peso

//Escribí una función calcularEnvio(pesoKg) que devuelva el costo de envío según estas reglas:

//Hasta 1kg: $50
//Más de 1kg hasta 5kg: $100
//Más de 5kg: $100 + $20 por cada kg extra sobre 5

//Probala con 0.5, 3, y 8.


function calcularEnvio(pesokg){

    if (pesokg <= 1 ){
        return 50;
    }else if (pesokg <= 5){
        return 100;
    }else{
        const diferencia = pesokg - 5;  
        return 100 + (diferencia *20); 
    }
}


console.log(calcularEnvio(8));
