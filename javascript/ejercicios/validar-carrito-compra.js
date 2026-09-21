const stockDisponible = 5;
const cantidadPedida = 8;
const precioUnitario = 25;

//Usando if/else, determiná: si cantidadPedida es mayor que stockDisponible, 
// mostrá un mensaje indicando cuántas unidades sí se pueden vender, 
// y calculá el total solo con esa cantidad disponible. Si hay stock suficiente, 
// calculá el total normal con la cantidad pedida completa.

if (cantidadPedida > stockDisponible){
    console.log(`Solo tenemos disponibles ${stockDisponible}`);

}else{
    const disponible = stockDisponible - cantidadPedida; 

}

