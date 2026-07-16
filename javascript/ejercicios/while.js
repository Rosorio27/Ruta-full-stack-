
let contador = 0; 
let saldoInicial=100; 

while (saldoInicial>0){
    
    console.log(saldoInicial);
    saldoInicial -=30; 
    contador++; 
}


console.log(`El numero de vueltas que dio este ciclo  fue ${contador}`);