# Asincronia y APIs

## asincronia 

### Concepto de API

    **Application Programming Interface** (Interfaz de Programación de Aplicaciones). En términos simples: es un conjunto de reglas y puntos de acceso que un sistema (un servidor, una aplicación) expone, para que otros programas puedan pedirle datos o funcionalidad, sin necesitar saber cómo funciona por dentro.

### endpoint 

    Un endpoint es, literalmente, una URL específica de una API, que representa un punto de acceso concreto a cierto dato o funcionalidad.
    

### callbacks

    toma una funcion y llamala de vuelta cuando corresponda (cuando terminer timer, cuando de click, cuando llegue una respuesta del servidor)

    ejemplos: 

        boton.addEventListener("click", funcionA);   // funcionA es el callback
        gastos.forEach(funcionB);                     // funcionB es el callback
        gastos.map(funcionC);                          // funcionC es el callback
        gastos.filter(funcionD);   

### promised

    es un objeto especial de javascript que representa el resultado de una operacion asincrona, que todavia no termino pero que en algun momento va a terminar, ya sea con exito o con error 

    **Tres estado**:
        -Pending (no esta listo)
        -Fulfilled/resolved  (lista, podes ir a buscarla)
        -reject (algo salio mal)

### async / await 

    **Async:** la forma de construir y capturar estados y errores de un codigo asincrono, de forma moderna como si fuera sincrono es decir de arriba a abajo en su forma convencional

    **sintaxis basicas:** 

        async function obtenerDatos() {
            // acá adentro puedo usar await
        }

    O con arrow function:

        const obtenerDatos = async () => {
            // acá adentro puedo usar await
        };

    **Await:** se pone antes de cualquier operacion que devuvelva una promesa como fetch. le dice a javascript espera que la operacion termine. Solo afecta a la funcion la pagina sigue su curso normal. 

    **Sintaxis basica:**

        const obtenerDatos = async () => {
            const respuesta = await fetch("https://alguna-api.com/datos");
            console.log(respuesta);   // esto se ejecuta RECIÉN cuando fetch terminó
        };

    await solo funciona dentro de una funcion async 

    **Manejo de errores con try/catch 

        const obtenerDatos = async () => {
            try {
                const respuesta = await fetch("https://alguna-api.com/datos");
                console.log(respuesta);
            } catch (error) {
                console.log("Algo salió mal:", error);
            }
        };

### fetch (pedir datos a un servidor externo)

    **Fetch**: es una funcion incorporada del navegador te permite hacer peticiones http a una url y te devuelve una promesa como respuesta 

    **sintaxis basica:**

        const respuesta = await fetch("https://alguna-api.com/datos");

    fetch no entrega los datos reales de la peticion te da un **objeto response** sino informacion de la respuesta. Luego se parsea con .json();  devuelve un objeto u array real de javascript 

    const obtenerPelicula = async () => {
        try {
            const respuesta = await fetch("https://api-de-peliculas.com/pelicula/123");
            const datos = await respuesta.json();
            console.log(datos);
        } catch (error) {
            console.log("Error al obtener los datos:", error);
        }
    };

    obtenerPelicula();

### metodos mas comunes http 

    -get: para pedir y leer datos 
    -post: enviar datos nuevo(crear)
    -put/patch: actualizar algo existente
    -delete: borrar algo 

    fectch por defecto hace get si no le dices nada mas; es lo que necesitas para traer datos de una api 

    **Codigos basicos de error:**
        -200: todo salio bien 
        -404: no encontro o url no existe 
        -500: error del lado del servidor 
        -404-403: error de login no autorizado 




