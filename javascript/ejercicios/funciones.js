const numero = 0;

const esPar = (num) => num % 2 === 0; 

console.log(esPar(numero));

const clasificarSaldo = (saldoRestante) => {
    if (saldoRestante < 0 ){
        return `Saldo excedido`
    }else if (saldoRestante === 0){
        return `Saldo exacto`
    }else{
        return `Saldo positivo`
    }
}

console.log(clasificarSaldo(numero)); 