const gastos = [1000, 500, 200, 300, 15];

const gastosMayoresA500 = gastos.filter((mayor) => mayor >500); 
const gastosPares = gastos.filter((par) => par % 2 === 0); 


console.log(gastos); 
console.log(gastosMayoresA500);
console.log(gastosPares);