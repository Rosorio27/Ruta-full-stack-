const gastos =[ 1000, 500, 300, 800, 200, 50, 1200]; 

const filtrados = gastos.filter((gasto) => gasto >300 );
const conDescuento = gastosFiltrados.map((elemento) => elemento * 0.95); 
const sumados = conDescuento.reduce((acumulador, valor) => acumulador + valor, 0); 
     

console.log(`El resultado de la suma es: ${sumados}`); 