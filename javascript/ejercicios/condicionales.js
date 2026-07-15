const presupuesto = 1500; 
const totalGastado = 500; 
const saldoRestante = presupuesto - totalGastado; 

console.log("Tu presupuesto inicial es: " +presupuesto);

if (saldoRestante < 0 ){
    console.log(`Te excediste en el presupuesto tu presupuesto actual es: ${saldoRestante}`);
    
}else if (saldoRestante === 0 ){
    console.log(`Gastaste justo tu presupuesto tu presupuesto actual es: ${saldoRestante}`);
} else{
    console.log(`Estas dentro del presupuesto tu presupuesto actual es: ${saldoRestante}`); 
}

