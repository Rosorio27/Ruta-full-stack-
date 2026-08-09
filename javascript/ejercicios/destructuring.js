
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

empleados.forEach((empleado) => {
    console.log(`${empleado.nombre} = ${empleado.salario}`);
}); 
    

empleados.forEach(({nombre, salario}) => {
    console.log(`${nombre} - ${salario}`);
});  

const gastosEnero = [100, 200];
const gastosFebrero = [300, 400];

const union = gastosEnero.concat(gastosFebrero);

console.log(union);

const unionSpread = [...gastosEnero, ...gastosFebrero];

console.log(unionSpread);

const gastoOriginal = { nombre: "Alquiler", monto: 1000 };
console.log(gastoOriginal);

const gastoActualizado = { ...gastoOriginal, monto: 1200}; 
console.log(gastoActualizado);


const sumarGastos = (...numeros) => {
    return numeros.reduce((acum, numeroActual)  => acum + numeroActual, 0 ); 
};

console.log(sumarGastos(30,60,90,50)); 

const producto1 = { nombre: "Laptop", precio: 15000, marca: "Dell", stock: 5 };

const {nombreProducto, ...resto} = producto1

console.log(nombreProducto);
console.log(resto); 



const producto2= { nombrePro: "Laptop", precio: 15000, marca: "Dell", stock: 5 };

const {nombrePro, ...restoinfo} = producto2; 

console.log(nombrePro, restoinfo); 


function crearContador (){

  let contador = 0; 

  return function () {
    contador += 1;
    console.log(contador); 
  }; 
}; 


const miContador = crearContador();

miContador();
miContador();
miContador();


const otroContador = crearContador();
otroContador();


function validacion (clave){

   return function(intento){
      if (intento === clave){
        console.log(`Acceso concesido`)
      }else{
        console.log(`Acceso denegado`); 
      }
  }; 
}; 


const validarClave = validacion("1234");

validarClave("1234");
validarClave("0000");