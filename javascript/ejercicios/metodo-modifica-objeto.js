const carrito = {total: 0, 
    agregarProducto: function (precio){
        this.total += precio; 
    }
}; 


carrito.agregarProducto(100); 

console.log(carrito.total); 

carrito.agregarProducto(100); 

console.log(carrito.total); 

carrito.agregarProducto(100); 

console.log(carrito.total); 