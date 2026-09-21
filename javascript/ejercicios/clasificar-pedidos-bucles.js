const pedidos = [
    {mesa: 3, monto: 150, esVip: false},
    {mesa: 7, monto: 500, esVip: true},
    {mesa: 1, monto: 80, esVip: false},
]; 


for (let i=0; i<pedidos.length; i++){
    if(pedidos[i].esVip){
        console.log(`Prioridad alta`); 
    }else if (pedidos[i].monto > 200 ){
        console.log(`Prioridad media`);
    } else {
        console.log(`Prioridad baja`);
    }

}