const gastos = [
  { nombre: "Alquiler", monto: 1000, categoria: "Vivienda" },
  { nombre: "Comida", monto: 500, categoria: "Alimentación" },
  { nombre: "Internet", monto: 400, categoria: "Servicios" },
  { nombre: "Luz", monto: 1500, categoria: "ServiciosBasicos" }
];


const nombreGastos = gastos.map((gasto) => gasto.nombre); 
const gastosCategoriaX = gastos.filter((gasto) => gasto.categoria === "Vivienda" );
const totalGastado = gastos.reduce((acum , sumado) => acum + sumado.monto, 0);

console.log(nombreGastos);
console.log(gastosCategoriaX);
console.log(totalGastado);
