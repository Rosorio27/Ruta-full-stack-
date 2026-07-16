
//declaracion de variables 
const presupuesto = 3000; 
const gastoAlquiler = 1000; 
const gastoCarro = 500; 
const gastoComida = 500; 

//funcion
const calcularGastoTotal = (a, b, c) => a + b + c;  

const calcularSaldo = (a, b) => a-b; 

const clasificarSaldo = (a) => {
    if (a < 0 ){
        return `Saldo excedido`
    }else if (a === 0){
        return `Saldo exacto`
    }else{
        return `Saldo positivo`
    }
}

//llamado 
const gastoTotal = calcularGastoTotal(gastoAlquiler,gastoCarro,gastoComida);
const saldoRestante = calcularSaldo(presupuesto,gastoTotal); 
const mensaje= clasificarSaldo(saldoRestante);

//Detalles del mes 
console.log(`Gastos para todo el mes: `);
console.log(`Gasto de alquiler: ${gastoAlquiler}`);
console.log(`Gasto de vehiculo: ${gastoCarro}`);
console.log(`Gasto de comida: ${gastoComida}`);
console.log("\n");

//operaciones del mes 
console.log(`Total gastado este mes: `+gastoTotal);
console.log(`Presupuesto original del mes: `+presupuesto);
console.log(`Saldo restante del mes: `+saldoRestante);
console.log(mensaje);
