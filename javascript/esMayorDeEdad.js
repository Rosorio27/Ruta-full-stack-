//necesita un parametro para compribar edad 

// necesita una condicion  que evalua esa edad 

// un return de respuesta un string 


const esMayorDeEdad = (edad)  => {

    if (edad >= 18){
        return "Es mayor a 18 años"; 
    }else{
        return "No es mayor de edad"; 
    }
  
};


console.log(esMayorDeEdad(15)); 