const gastos = [ 1000, 500, 300, 800, 200]; 

const totalGastado = gastos.reduce((acumulador, gasto) => acumulador + gasto, 0); 

console.log(totalGastado); 

