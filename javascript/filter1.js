const platos = [
  { nombre: "Sopa", precio: 3 },
  { nombre: "Churrasco", precio: 8 },
  { nombre: "Ensalada", precio: 4 },
  { nombre: "Costillas", precio: 7 }
];

// quiero recorrer el array de platos y quedarme solo con las los objetos filtrados 
// la condición que cada plato tiene que cumplir es que sean mayores a 5 dolares 
// el resultado va a ser un array con lso datos filtrados 

const arrayPlatos = platos.filter((plato) => plato.precio > 5);

console.log(arrayPlatos); 