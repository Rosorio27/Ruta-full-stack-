for (let fila = 0; fila < 8; fila++) {
  let linea = "";

  // Si la fila es par, agregamos un espacio en blanco al inicio
  if (fila % 2 === 0) {
    linea += " ";
  }

  // Cada fila tiene 4 caracteres '#' separados por espacios
  for (let col = 0; col < 4; col++) {
    linea += "# ";
  }

  console.log(linea);
}