const categoriasMenu = [
    {nombre: "Entradas", items: ["yuca frita", "tajaditas"]},
    {nombre: "platos fuertes", items: ["churrascos", "pollo a la brasas"]},
    {nombre: "postres", items: ["tres leches", "flan de coco"]}
]; 

// quiero recorrer categoriasMenu y quedarme con la que tiene en nombre: postres
// la condición es que el nombre sea igual a "postres"
// el resultado va a ser un array con con los datos de postres

const menuSeccionado = categoriasMenu.filter((menu) => menu.nombre === "postres"); 
console.log(menuSeccionado); 