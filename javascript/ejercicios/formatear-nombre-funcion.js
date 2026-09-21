//Escribí una función formatearNombre(nombre) que reciba un nombre 
// (posiblemente con espacios de más, o todo en mayúsculas/minúsculas mezcladas) y devuelva el nombre "limpio": 
// sin espacios sobrantes, con la primera letra en mayúscula y el resto en minúscula. 
// Probala con " rAMON " → debería devolver "Ramon".


function formatearNombre(nombre){

   const sinEspacios= nombre.trim(); 

    const mayuscula = sinEspacios.charAt(0).toUpperCase() + sinEspacios.slice(1).toLowerCase(); 
    
return mayuscula; 


}


console.log(formatearNombre("       raMoN ")); 