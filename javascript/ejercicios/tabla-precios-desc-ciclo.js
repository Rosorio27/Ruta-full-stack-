const precioUnitario = 50; 

//Instrucción: usando un for del 1 al 10 (cantidad de unidades), calculá y mostrá el precio total para cada cantidad:

//Menos de 5 unidades → sin descuento.
//5 o más unidades → 10% de descuento sobre el total.

//Formato de salida: "Cantidad: 3, Total: $150".


for (let i=1; i<=10; i++){
    
    let precioTotal = i * precioUnitario; 

    if (i >= 5){
        const descuento = precioTotal * 0.10; 
        precioTotal -= descuento;
    }

    console.log(`cantidad ${i}, total: $${precioTotal}`);
}


