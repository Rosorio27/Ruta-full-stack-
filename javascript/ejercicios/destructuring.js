
const producto = {nombre: "Laptop", precio: 15000, marca: "Dell"}; 
const {marca: fabricante} = producto;
const {nombre, precio} = producto;
 
console.log(fabricante); 
console.log(`nombre: ${nombre}, precio: ${precio}`); 


const colores = ["rojo", "verde", "azul", "amarillo"];
const  [primero, ,segundo] = colores; 

console.log(primero,segundo); 

const gastos = [{nombre: "alquiler", monto: 1000},
                {nombre: "comida", monto: 500},
                {nombre: "internet", monto: 400}
];

gastos.forEach(({nombre, monto}) =>{
    console.log(nombre, monto);     
});

const productos = [
  { nombre: "Laptop", precio: 15000, categoria: "Tecnología" },
  { nombre: "Silla", precio: 2000, categoria: "Muebles" },
  { nombre: "Mouse", precio: 300, categoria: "Tecnología" }
];

const nuevo = productos.map(({nombre, precio}) => `${nombre} cuesta $${precio}`);

console.log(nuevo); 

const persona = { nombreP: "Carlos", edadp: 30, ciudadp: "Tegucigalpa" };
const nombrePersona = persona.nombreP;
const edadPersona = persona.edadp; 
console.log(nombrePersona, edadPersona);

const {nombreP, edadp} = persona; 
console.log(nombreP, edadp); 

const frutas = ["manzana", "pera", "uva"];

const fruta1 = frutas[0]; 
const fruta2 = frutas[1];

console.log(fruta1, fruta2); 

const [frutita1, frutita2] = frutas;

console.log(frutita1, frutita2); 

const empleados = [
  { nombre: "Ana", salario: 25000 },
  { nombre: "Luis", salario: 18000 }
];

const sueldo = empleados.salario; 
console.log(sueldo); 


empleados.forEach((empleado) => {
    console.log(`${empleado.nombre} = ${empleado.salario}`);
}); 
    

empleados.forEach(({nombre, salario}) => {
    console.log(`${nombre} - ${salario}`);
});  