/* =============================================
   LA BRASA DORADA · Interactividad & Animaciones
   ============================================= */

document.documentElement.classList.add("js");

document.addEventListener("DOMContentLoaded", () => {
    console.log("✅ interactividad.js cargado correctamente");

    /* ---------- 1. NAVBAR: cambia al hacer scroll ---------- */
    const header = document.querySelector(".header");

    const actualizarNavbar = () => {
        if (window.scrollY > 60) {
            header.classList.add("header-scrolled");
        } else {
            header.classList.remove("header-scrolled");
        }
    };

    window.addEventListener("scroll", actualizarNavbar);
    actualizarNavbar();

    /* ---------- 2. SCROLL REVEAL con IntersectionObserver ---------- */
    const elementosReveal = document.querySelectorAll(
        ".seccion, .plato-destacado, .especialidad, .historia-grid, .carta-categoria"
    );

    // Fallback: si no hay IntersectionObserver, mostrar todo
    if (!("IntersectionObserver" in window)) {
        elementosReveal.forEach((el) => el.classList.add("visible"));
    } else {
        const observer = new IntersectionObserver(
            (entradas) => {
                entradas.forEach((entrada) => {
                    if (entrada.isIntersecting) {
                        entrada.target.classList.add("visible");
                        observer.unobserve(entrada.target);
                    }
                });
            },
            { threshold: 0.1, rootMargin: "0px 0px -30px 0px" }
        );

        elementosReveal.forEach((el) => observer.observe(el));

        // Fallback de seguridad: mostrar todo después de 3 segundos
        setTimeout(() => {
            elementosReveal.forEach((el) => el.classList.add("visible"));
        }, 3000);
    }

    /* ---------- 3. CONTADOR ANIMADO (años de tradición) ---------- */
    const contador = document.querySelector("[data-contador]");
    if (contador) {
        const objetivo = parseInt(contador.dataset.contador, 10);
        const duracion = 2000; // ms
        let inicio = null;

        const animarContador = (timestamp) => {
            if (!inicio) inicio = timestamp;
            const progreso = Math.min((timestamp - inicio) / duracion, 1);
            const valor = Math.floor(progreso * objetivo);
            contador.textContent = valor;

            if (progreso < 1) {
                requestAnimationFrame(animarContador);
            } else {
                contador.textContent = objetivo;
            }
        };

        const contadorObserver = new IntersectionObserver(
            (entradas) => {
                if (entradas[0].isIntersecting) {
                    requestAnimationFrame(animarContador);
                    contadorObserver.unobserve(contador);
                }
            },
            { threshold: 0.5 }
        );

        contadorObserver.observe(contador);
    }

    /* ---------- 4. BOTÓN "VOLVER ARRIBA" ---------- */
    const botonArriba = document.createElement("button");
    botonArriba.className = "btn-arriba";
    botonArriba.setAttribute("aria-label", "Volver arriba");
    botonArriba.innerHTML = "↑";
    document.body.appendChild(botonArriba);

    const mostrarBotonArriba = () => {
        if (window.scrollY > 500) {
            botonArriba.classList.add("visible");
        } else {
            botonArriba.classList.remove("visible");
        }
    };

    window.addEventListener("scroll", mostrarBotonArriba);
    mostrarBotonArriba();

    botonArriba.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });

    /* ---------- 5. ANIMACIÓN DE TÍTULOS AL HACER HOVER ---------- */
    const titulos = document.querySelectorAll(".titulo-seccion");
    titulos.forEach((titulo) => {
        titulo.addEventListener("mouseenter", () => {
            titulo.classList.add("titulo-animado");
        });
        titulo.addEventListener("mouseleave", () => {
            titulo.classList.remove("titulo-animado");
        });
    });

    /* ---------- 6. EFECTO PARALLAX SUTIL EN EL HERO ---------- */
    const hero = document.querySelector(".hero");
    if (hero) {
        window.addEventListener("scroll", () => {
            const offset = window.scrollY;
            if (offset < window.innerHeight) {
                hero.style.backgroundPositionY = `${offset * 0.4}px`;
            }
        });
    }

    /* ---------- 7. RESALTAR ENLACE ACTIVO EN NAV ---------- */
    const secciones = document.querySelectorAll("section[id]");
    const enlacesNav = document.querySelectorAll(".nav-links a");

    const resaltarEnlace = () => {
        let actual = "";
        secciones.forEach((seccion) => {
            const top = seccion.offsetTop - 120;
            if (window.scrollY >= top) {
                actual = seccion.getAttribute("id");
            }
        });

        enlacesNav.forEach((enlace) => {
            enlace.classList.remove("activo");
            if (enlace.getAttribute("href") === `#${actual}`) {
                enlace.classList.add("activo");
            }
        });
    };

    window.addEventListener("scroll", resaltarEnlace);
    resaltarEnlace();

    /* ---------- 8. ANIMACIÓN DE PRECIOS EN LA CARTA ---------- */
    const precios = document.querySelectorAll(".plato-precio");
    precios.forEach((precio) => {
        precio.addEventListener("mouseenter", () => {
            precio.classList.add("precio-animado");
        });
        precio.addEventListener("mouseleave", () => {
            precio.classList.remove("precio-animado");
        });
    });

    /* ---------- 9. EFECTO TILT 3D EN TARJETAS ---------- */
    const tarjetas = document.querySelectorAll(".plato-destacado");
    tarjetas.forEach((tarjeta) => {
        tarjeta.addEventListener("mousemove", (e) => {
            const rect = tarjeta.getBoundingClientRect();
            const x = (e.clientX - rect.left) / rect.width - 0.5;
            const y = (e.clientY - rect.top) / rect.height - 0.5;
            tarjeta.style.transform = `perspective(800px) rotateY(${x * 6}deg) rotateX(${y * -6}deg) translateY(-8px)`;
        });
        tarjeta.addEventListener("mouseleave", () => {
            tarjeta.style.transform = "";
        });
    });

    /* ---------- 10. PULSO EN BOTONES ---------- */
    const botones = document.querySelectorAll(".btn-oro");
    botones.forEach((boton) => {
        boton.addEventListener("mouseenter", () => {
            boton.classList.add("btn-pulso");
        });
        boton.addEventListener("mouseleave", () => {
            boton.classList.remove("btn-pulso");
        });
    });

    /* ---------- 11. ANIMACIÓN DE ENTRADA DEL HERO ---------- */
    const heroContenido = document.querySelector(".hero-contenido");
    if (heroContenido) {
        heroContenido.classList.add("hero-entrada");
    }

    /* ---------- 12. EFECTO DE BRILLO EN IMÁGENES DE ESPECIALIDADES ---------- */
    const especialidades = document.querySelectorAll(".especialidad");
    especialidades.forEach((especialidad) => {
        especialidad.addEventListener("mouseenter", () => {
            especialidad.classList.add("especialidad-activa");
        });
        especialidad.addEventListener("mouseleave", () => {
            especialidad.classList.remove("especialidad-activa");
        });
    });
});