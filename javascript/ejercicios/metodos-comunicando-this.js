const inventario = { 
    stock: 20,
    vender: function(cantidad){
        this.stock -= cantidad;
        this.mostrarStrock(); 
    },

    mostrarStrock: function(){
        console.log(`Stock actual es: ${this.stock}`); 
    }
}; 

inventario.vender(5); 

inventario.vender(3); 