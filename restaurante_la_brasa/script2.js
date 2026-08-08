const conteoImagenes = document.querySelectorAll("img");
console.log(conteoImagenes.length);

const tituloEspecialidades = document.querySelector("#especialidades .titulo-seccion");
if (tituloEspecialidades) {
    tituloEspecialidades.textContent = "Galería de fotos";
}

const enlaces = document.querySelectorAll("nav a");

enlaces.forEach((enlace) => {
    console.log(enlace.textContent);
});

const categoriasCarta = document.querySelectorAll(".carta-categoria");
const terceraCategoria = categoriasCarta[2];
if (terceraCategoria) {
    const cuantosli = terceraCategoria.querySelectorAll("li");
    console.log(cuantosli.length);
}

const paraFooter = document.querySelector(".footer-inner");
const nuevoDiv = document.createElement("div");

nuevoDiv.innerHTML = `
    <p class="footer-apuntes"> Síguenos en redes </p>
`;

if (paraFooter) {
    paraFooter.appendChild(nuevoDiv);
}

const arregloEntradas = [
    { nombre: "Comida rápida", precio: 4 },
    { nombre: "Comida china", precio: 50 }
];

const entradas = document.querySelector("#menu .carta-categoria");
const ulentrada = entradas ? entradas.querySelector("ul") : null;
console.log(entradas);
console.log(ulentrada);

if (ulentrada) {
    arregloEntradas.forEach((nuevoli, indice) => {
        const li = document.createElement("li");
        li.className = "plato";
        li.innerHTML = `
            <div class="plato-info">
                <span class="plato-nombre">${nuevoli.nombre}</span>
                <span class="plato-desc">Agregado por el script</span>
            </div>
            <span class="plato-precio">L. ${nuevoli.precio}</span>
        `;
        ulentrada.appendChild(li);
    });
}

const tituloHeader = document.querySelector(".hero-titulo");
console.log(tituloHeader);

if (tituloHeader) {
    tituloHeader.addEventListener("click", () => {
        tituloHeader.textContent = "¡Bienvenidos!";
    });
}

const footerResaltado = document.querySelector("footer");
console.log(footerResaltado);

footerResaltado.addEventListener("click", () => {
    footerResaltado.classList.add("resaltado");
});

//localStorage.setItem("nombre","ramon");
console.log(localStorage.getItem("nombre"));

const listado = [
    { nombre: "tarea1", estado: "activo" },
    { nombre: "tarea2", estado: "desactivo" },
    { nombre: "tarea3", estado: "activo" }
];

if (localStorage.getItem("listado") === null) {
    localStorage.setItem("listado", JSON.stringify(listado));
}
console.log(listado);

const arraylistado = JSON.parse(localStorage.getItem("listado"));
console.log(arraylistado);