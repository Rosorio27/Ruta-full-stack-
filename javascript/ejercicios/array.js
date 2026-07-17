const gastos = [1000, 500, 300, 800, 200];

console.log(gastos[0]);
console.log(gastos[gastos.length-1]);
console.log(`El total de datos del arreglo: `+gastos.length); 
    
gastos[2] = 350;

for (let i=0; i<gastos.length; i++){
    console.log(gastos[i]);
}

console.log("\n");

for (const gasto of gastos){
    console.log(gasto);
}