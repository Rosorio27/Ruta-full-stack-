# conceptos importantes del lenguaje

## Destructuring (desempaquetar)

es la forma corta de sacar valores de un array u objeto, sin tener que acceder propiedad por propiedad 

Forma tradicional:

javascript
const gasto = { nombre: "Alquiler", monto: 1000 };
const nombre = gasto.nombre;
const monto = gasto.monto;

const { nombre, monto } = gasto;
console.log(nombre);   // "Alquiler"
console.log(monto);    // 1000

## Spread(desparramar)

... la idea central puesto en un array o un objeto significa: toma todo lo que hay dentro y ponlo suelto elemento por elemento 

Ejemplo:

    const datosBase = { nombre: "Alquiler", categoria: "Vivienda" };
    const gastoCompleto = { ...datosBase, monto: 1000 };
    console.log(gastoCompleto); 

## Export/ Import

    sintaxis basica: 

        export const nombreDeVariable = "algo";
        export const miFuncion = () => { /* ... */ };

    Exportar varias cosas juntas, al final del archivo (alternativa a poner export en cada línea):


        const funcionA = () => { /* ... */ };
        const funcionB = () => { /* ... */ };

        export { funcionA, funcionB };

    Exportar UNA cosa principal (default) — solo puede haber un export default por archivo:

        const calcularTotal = (a, b) => a + b;
        export default calcularTotal;

    Sintaxis básica — import

    Importar algo exportado con nombre (necesitás llaves { }, y el nombre debe coincidir exactamente):

        import { nombreDeVariable, miFuncion } from "./archivo.js";

    Importar lo que fue exportado como default (sin llaves, y podés ponerle el nombre que quieras):

        import calcularTotal from "./archivo.js";

     Importar ambos tipos a la vez (si un archivo tiene default + nombrados):

        import calcularTotal, { funcionA, funcionB } from "./archivo.js";
        
## Closure 

    Cualquier función que esté escrita "adentro" de otra función, y que use una variable de esa función externa, es automáticamente un closure

    Es un mecanismo de encapsulamiento

    Closures te dan una forma de crear variables "privadas y protegidas"

    