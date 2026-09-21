const productos = [
  { nombre: "Laptop", precio: 15000, enOferta: true },
  { nombre: "Mouse", precio: 300, enOferta: false },
  { nombre: "Teclado", precio: 800, enOferta: true },
];


const nuevoarreglo = productos.filter ((producto)=> producto.enOferta).map((producto) => producto.nombre) ; 

console.log(nuevoarreglo); 