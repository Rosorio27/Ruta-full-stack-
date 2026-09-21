const empleados = [
  { nombre: "Ana", ventasDelMes: 45000 },
  { nombre: "Luis", ventasDelMes: 62000 },
  { nombre: "Marta", ventasDelMes: 58000 },
];

const mayorVentas = empleados.reduce((mejor, empleado) =>{

    if (empleado.ventasDelMes > mejor.ventasDelMes){
        return empleado;
    }else{
        return mejor; 
    }
}); 

console.log(mayorVentas); 