/*MENU TOGGLE*/
const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector("#main-navigation");
    
menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('active');
    nav.classList.toggle('active');
});


/************************************************************************************************************************/

const datosContenido = {
  p: {
    titulo: "Creamos con el corazón",
    descripcion: "Amamos la innovación y el crecimiento digital. Cada proyecto lo asumimos con la energía necesaria para hacer destacar tu marca en un mercado saturado."
  },
  e: {
    titulo: "Entendemos tu negocio",
    descripcion: "Nos ponemos en los zapatos de los emprendedores y de las PYMES. Diseñamos soluciones reales para tus problemas cotidianos y metas financieras."
  },
  n: {
    titulo: "Dominamos el ecosistema",
    descripcion: "Nacimos y evolucionamos con internet. Dominamos las últimas herramientas, tendencias y algoritmos para que tu marca nunca se quede atrás."
  },
  g: {
    titulo: "Compromiso con resultados",
    descripcion: "No vendemos humo; nos enfocamos en métricas que importan. Tu inversión está respaldada por un equipo obsesionado con el retorno de inversión (ROI)."
  },
  u: {
    titulo: "Un solo equipo contigo",
    descripcion: "No somos un proveedor externo más; nos convertimos en tu aliado estratégico. Trabajamos hombro a hombro para forjar el camino hacia el éxito."
  },
  i: {
    titulo: "Aceleramos tu presencia",
    descripcion: "Llevamos tu negocio directamente frente a tu mercado meta. Potenciamos tus ventas, leads y el posicionamiento digital de forma estratégica."
  },
  n2: {
    titulo: "Estándares premium",
    descripcion: "Cuidamos cada píxel, cada línea de código y cada palabra de tu branding. Ofrecemos la máxima calidad para que compitas con los grandes."
  }
};

// Captura de elementos del DOM
const letras = document.querySelectorAll('.opcion-letra');
const tarjeta = document.getElementById('tarjeta-contenido');
const titulo = document.getElementById('tarjeta-titulo');
const descripcion = document.getElementById('tarjeta-descripcion');
const contenidoTarjeta = document.querySelector('.contenido-tarjeta');

// Índice de la letra visible actualmente (0 = "P")
let indiceActual = 0;

// Intervalo de auto-avance: cada 3 segundos en bucle infinito
const INTERVALO_CICLO = 3000; // milisegundos
let temporizador;

// Muestra el contenido de la letra indicada y sincroniza flecha + animaciones
function mostrarContenido(indice) {
  const elemento = letras[indice];
  const letraActiva = elemento.getAttribute('data-letra');

  // 1. Cambiar clase activa en la lista (mueve la flecha y el resaltado)
  letras.forEach(l => l.classList.remove('activa'));
  elemento.classList.add('activa');

  // 2. Cambiar el color de fondo de la tarjeta
  tarjeta.className = 'tarjeta-dinamica';
  tarjeta.classList.add(`color-${letraActiva}`);

  // 3. Inyectar los nuevos textos
  titulo.textContent = datosContenido[letraActiva].titulo;
  descripcion.textContent = datosContenido[letraActiva].descripcion;

  // 4. Re-disparar la animación de entrada en cada cambio del ciclo
  contenidoTarjeta.classList.remove('animar-entrada');
  void contenidoTarjeta.offsetWidth; // Forzar reflow para reiniciar la animación
  contenidoTarjeta.classList.add('animar-entrada');
}

// Avanza al siguiente elemento del bucle infinito (P → E → N → G → U → I → N → P → ...)
function avanzarCiclo() {
  indiceActual = (indiceActual + 1) % letras.length;
  mostrarContenido(indiceActual);
}

// Inicia el auto-avance cada 3 segundos
function iniciarCiclo() {
  temporizador = setInterval(avanzarCiclo, INTERVALO_CICLO);
}

// Reinicia el conteo sin detener el ciclo (el click solo lo sincroniza)
function reiniciarTemporizador() {
  clearInterval(temporizador);
  iniciarCiclo();
}

// Evento Click para cada opción del menú
letras.forEach((elemento, indice) => {
  elemento.addEventListener('click', () => {
    // Fijar el ciclo en el elemento clickeado
    indiceActual = indice;

    // Mostrar su contenido al instante
    mostrarContenido(indice);

    // Reiniciar el temporizador: el ciclo continúa desde este punto
    reiniciarTemporizador();
  });
});

// Arrancar el ciclo automático al cargar la página
mostrarContenido(0);
iniciarCiclo();

/************************************************************************************************************************/
/* CARRUSEL DE SERVICIOS - Puntitos de desplazamiento suave */

const trackServicios = document.getElementById('slider-servicios-track');
const dotsServicios = document.querySelectorAll('#indicador-servicios .dot');

if (trackServicios && dotsServicios.length) {
  // Ancho de desplazamiento = ancho de una tarjeta + gap (15px)
  const calcularPaso = () => {
    const primeraTarjeta = trackServicios.querySelector('.tarjeta');
    if (!primeraTarjeta) return 0;
    return primeraTarjeta.getBoundingClientRect().width + 15;
  };

  // Actualiza qué puntito está activo según la posición del scroll
  const actualizarDotActivo = () => {
    const paso = calcularPaso();
    if (paso <= 0) return;
    let indice = Math.round(trackServicios.scrollLeft / paso);
    indice = Math.min(Math.max(indice, 0), dotsServicios.length - 1);
    dotsServicios.forEach((dot, i) => {
      dot.classList.toggle('activo', i === indice);
    });
  };

  // Click en un puntito -> desplazamiento suave a esa tarjeta
  dotsServicios.forEach((dot, indice) => {
    dot.addEventListener('click', () => {
      const paso = calcularPaso();
      trackServicios.scrollTo({
        left: indice * paso,
        behavior: 'smooth'
      });
    });
  });

  // Flechas de desplazamiento: avanzar/retroceder una tarjeta
  const flechaIzq = document.querySelector('.flecha-servicios.flecha-izq');
  const flechaDer = document.querySelector('.flecha-servicios.flecha-der');
  const desplazar = (direccion) => {
    const paso = calcularPaso();
    const maxScroll = trackServicios.scrollWidth - trackServicios.clientWidth;
    let destino = trackServicios.scrollLeft + direccion * paso;
    destino = Math.min(Math.max(destino, 0), maxScroll);   // no salirse de los límites
    trackServicios.scrollTo({ left: destino, behavior: 'smooth' });
  };
  if (flechaIzq) flechaIzq.addEventListener('click', () => desplazar(-1));
  if (flechaDer) flechaDer.addEventListener('click', () => desplazar(1));

  // Mantener el puntito activo sincronizado al desplazar
  trackServicios.addEventListener('scroll', actualizarDotActivo, { passive: true });
}