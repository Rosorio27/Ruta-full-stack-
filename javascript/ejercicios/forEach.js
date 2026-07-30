const gastos = [1000, 500, 800, 200]; 


gastos.forEach((gasto, indice) =>{
    console.log(`Gasto #${indice+1} :${gasto}`); 
}); 

const nuevoArray = gastos.map((gasto) => gasto * 0.9 );

console.log(nuevoArray.join(" ")); 
console.log(gastos.join(" ")); 

