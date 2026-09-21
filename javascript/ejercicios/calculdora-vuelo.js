const totalCompra = 245.50;
const montoPagado = 300;


if (totalCompra === montoPagado){
    console.log(`Pago exacto gracias`);
}else if (montoPagado < totalCompra){
    const resta = totalCompra - montoPagado; 
    console.log(`Pago insuficiente, ingresa: ${resta}`);
}else{
    const resta = montoPagado - totalCompra; 
    console.log(`Te sobre ${resta} lempiras`);
}



