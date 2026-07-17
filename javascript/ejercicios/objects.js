const gastos1 = {
    nombre: "Ramon", 
    monto: 3500, 
    categoria: "alquiler",

    mostrarResumen: function(){
        console.log(`Nombre: (${this.nombre})`);
        console.log(`Monto: (${this.monto})`);
        console.log(`Categoria: (${this.categoria})`);
    },

    aplicarDesceunto: function(porcentaje){
        this.monto = this.monto * (1 - porcentaje); 
    }
};

gastos1.mostrarResumen(); 
gastos1.aplicarDesceunto(0.5);
gastos1.mostrarResumen(); 

