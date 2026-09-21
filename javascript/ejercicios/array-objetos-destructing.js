const empleados = [
    {nombre: "Ana", salario: 15000}, 
    {nombre: "Luis", salario: 18000}
];

empleados.forEach(({nombre, salario})=>{
    console.log(`${nombre} gana $${salario}`);  
});

