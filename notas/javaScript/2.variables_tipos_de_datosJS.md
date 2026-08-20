# Variables y tipos de datos 

## Variables 

    const= la etiqueta no se puede modificar o cambiar su valor 
    let = la etiqueta si se puede reasignar 

## Tipos de datos 

    string = cualquier secuencia de caracteres entre comillas 

    number = cualquier numero sin distinguir entre enteros o decimal 

    boolean = Solo dos valores posible true or false 

    undefined = por defecto se asigna si la variable no tiene ningun valor 

    null = que aun no tiene valor pero lo tendra o no 

## operadores 

    aritmeticos: 
        +   suma 
        -   resta 
        *   multiplicacion 
        /   division 
        %   modulo 
        **  potencia 

    atajos: 

        +=  suma 
        -=  resta
        *=  multiplicacion 
        ++  incremento
        --  decremento 

 ## Comparacion 

        ===  igual estricto (compara valor y tipo)   
        !==  distinto estricto 
        >    mayor que 
        <    menor que 
        >=   mayor o igual 
        <=   menor o igual 

## Operadores logicos 

        &&   true solo si ambos lados son true
        ||   true si almenos uno de los lados es true 
        !    invertes el valor (true= false false=true)  

## Condicionales 

### if / else if / else 

    if (condicion){

    }else{

    }

### ternario: cuando quieres una condicion en una sola linea 

    condicion ? valor true : valor false 

        const mensaje = edad >= 18 ? "Mayor" : "Menor";

### switch 

    switch (valor){
        case "valor": 
        break; 

        case "valor": 
        break; 
        default; 
    }

## bucles 

### for clasico 

    for (let i=0; i<5; i++){
        instruccion 
    }

### While 

    let intentos=0; 

    while (condicion){
        intruccion 
        contador++
    }

### For of 

    const frutas = ["manzana", "pera", "uva"]; 

    for (const fruta of frutas){
        console.log(fruta)
    }

### for in 

## Funciones 

    una funcion es un bloque de codigo empaquetado con un nombre, que podemos llamar las veces que quieras. 

    sintaxis 

        function nombrefuncion(parametros ){
            return valor; 
        }
    
### arrow functions 

    1. Version 

    const variable = (parametros ) => {
        return valor; 
    }

    2. Version (sin return)
    const variable = (parametros) => valor; 

### parametros con valor por defecto 

    const saludar = ( nombre = "invitado" ) => {
        console.log (`hola, ${nombre}`);
    }

    invocacion 

    saludar();              //vacio invoca el valor por defecto "invitado"
    saludar("Marco")        // sobreescribe

