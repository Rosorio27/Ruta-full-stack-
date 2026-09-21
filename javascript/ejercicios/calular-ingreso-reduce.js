const ventas = [
  { producto: "Camisa", cantidad: 3, precioUnitario: 250 },
  { producto: "Pantalón", cantidad: 1, precioUnitario: 600 },
  { producto: "Zapatos", cantidad: 2, precioUnitario: 900 },
];

const totalventas = ventas.reduce((acumlulador, producto) => (acumlulador + producto.cantidad * producto.precioUnitario), 0);  

console.log(totalventas); 