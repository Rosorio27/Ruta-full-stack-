# Accesibilida motore de busqueda

- **aria-label:** etiqueta de voz invisible donde tú escribías el texto a mano dentro del código lo que leera el bot
  - **usos comunes:**
    - 1. Botones que solo llevan un icono adentro: lupa, un carrito de compras, un engranaje
    - 2. Enlaces (<a>) que solo envuelven una imagen o un icono (como los logos de redes sociales en el pie de página)
    - 3. Campos de formulario (<input>) que no llevan un texto <label>
  ```html
  <button
    class="btn-carrito"
    aria-label="Ver productos agregados al carrito de compras"
  >
    🛒
  </button>
  ```
- **aria-labelledby:** para saber el nombre de un contenedor, va a buscar el elemento que tenga este ID específico y lee lo que
  dice en la pantalla
  - **Usos comunes:**
    - 1. Secciones completas (<section> o <main>): Para conectar la sección entera con el título principal (<h2> o <h3>) que
         el usuario sí puede leer
    - 2. Ventanas Flotantes o Modales: Para que cuando se abra un cartel de ofertas, el lector de pantalla sepa que el
         título de ese cartel le pertenece a toda la ventana
    - 3. Tablas de datos o Galerías: Para amarrar una cuadrícula con su encabezado descriptivo.

    ```html
    <section class="ofertas-semana" aria-labelledby="cat-ofertas-titulo">
      <h2 class="ofertas-semana__titulo" id="cat-ofertas-titulo">
        ¡Cosecha del Día con 30% de Descuento!
      </h2>
    </section>
    ```

- **aria-hidden="true"**: sirve para "ensordecer" o silenciar elementos visuales ante los robots de Google y los lectores de
  pantalla

  ```html
  <button class="btn-comprar">
    <span aria-hidden="true">🔥 🥦</span>
    ¡Comprar Brócoli Ya!
    <span aria-hidden="true">🥦 🔥</span>
  </button>
  ```
- **.sr-only**: Screen Reader Only te permite escribir un texto normal y semántico en tu HTML, pero ocultarlo visualmente de la 
                pantalla. El usuario común no ve absolutamente nada en su monitor, pero el robot de Google y los softwares lectores de pantalla para personas ciegas sí lo leen al 100%

    - **Usos comunes**: 

        - 1. Los titulos ocultos: Creas el título semántico para que Google lo indexe y lo premie, pero lo escondes de los ojos del cliente usando
        - 2. Texto Descriptivo Extra en Enlaces de "Leer Más o comprar"
        - 3. Contador de Notificaciones en Iconos. 
        - 4. Modificar el Estado de un Interruptor Dinámico

    ```html
      <button class="boton-icono">
        <!-- El icono que SÍ ve el usuario común -->
        <span aria-hidden="true">🛒</span>
  
        <!-- 🟢 EL TEXTO NINJA INVISIBLE: Solo lo lee el software de asistencia -->
        <span class="sr-only">Ver productos agregados al carrito de compras y pasar a la pasarela de pago</span>
        </button>          
        ```

    ```css
        sr-only {
        position: absolute;
        width: 1px;
        height: 1px;
        padding: 0;
        margin: -1px;
        overflow: hidden;
        clip: rect(0, 0, 0, 0); /* 🟢 El truco: Recorta la caja a un tamaño invisible de 0px */
        white-space: nowrap;
        border: 0;
        }
        ```
- **role="alert"**:  se aplica a contenedores (como un <div> o un <span>) que inicialmente están vacíos en el HTML, pero que reciben texto de forma dinámica mediante JavaScript o manipulación del DOM

    - **Usos comunes**: 
        - 1. Errores fatales de formularios:Cuando el usuario le da al botón de "Enviar" y el servidor rechaza el registro
        - 2. Notificaciones de urgencia en vivo: Avisos del sistema como "Tu sesión va a expirar en 2 minutos" o "Se ha perdido la conexión a internet
        - 3. Confirmaciones críticas de e-commerce: Error: Tarjeta de crédito rechazada" en el carrito de compras

    ```html
    <div class="form-vip__grupo">
        <label class="form-vip__label" for="vip-email">Correo Electrónico</label>
        <input class="form-vip__input" type="email" id="vip-email" required>
  
        <!-- 🟢 LA ALERTA PARLANTE: Nace vacía pero con el megáfono encendido -->
        <div 
            id="error-email" 
            class="form-vip__error" 
            role="alert" 
            aria-live="assertive"
        ></div>
    </div>
    ```

    ```css
    .form-vip__error {
  font-size: 1.3rem;
  font-weight: bold;
  color: #ef4444; /* Rojo de alerta industrial */
  margin-top: 5px;
  transition: var(--transition-smooth);
    }

    /* Si la caja está vacía, no ocupa espacio ni estorba el diseño responsivo */
    .form-vip__error:empty {
    display: none;
    }
     ```

- **aria-live**

    - aria-live="polite" : el navegador espera pacientemente a que la voz termine de hablar. Cuando se hace el silencio, le avisa al usuario el mensaje nuevo sin interrumpirlo de golpe

    - aria-live="assertive": No le importa si el software de asistencia está a mitad de una frase larga; corta la voz del navegador de golpe brusco

- **aria-expanded y aria-controls**: Lee cuando se activa un boton de estado booleado 

    - aria-control="id": Se le coloca al botón que dispara la acción [1.2]. Su valor debe ser el ID exacto del panel o la lista 
                        que se va a abrir 

    - aria-expanded="true/false" : El Interruptor Booleano. Es una propiedad binaria que cambia de valor dinámicamente mediante 
                                    JavaScript 

        - 1. false:  Le avisa al lector de pantalla que el menú está cerrado (colapsado)

        - 2. true: Le avisa en tiempo real que el menú está abierto (desplegado)


        ```html
        <!-- El Botón de Hamburguesa que el usuario toca con el dedo -->
        <button 
        class="menu-boton" 
        id="boton-hamburguesa"
        aria-controls="menu-principal" 
        aria-expanded="false" 
        aria-label="Abrir menú de navegación principal"
        >
        ☰
        </button>

        <!-- La Lista de Enlaces que aparece y desaparece -->
        <nav class="menu-navegacion" id="menu-principal">
            <ul class="menu-navegacion__lista">
            <li><a href="#">Inicio</a></li>
            <li><a href="#">Tienda Orgánica</a></li>
            <li><a href="#">Contacto VIP</a></li>
        </ul>
        </nav>
        ```

        ```css
        .menu-navegacion {
        /* De fábrica el menú está cerrado y oculto en el celular */
        max-height: 0;
        overflow: hidden;
        transition: max-height 0.3s cubic-bezier(0.25, 1, 0.5, 1);
        background-color: white;    
        }

        /* Tradución técnica: "Cuando el botón de arriba cambie su estado */
        /* aria-expanded a TRUE, busca a su hermano .menu-navegacion y ábrelo" */
        #boton-hamburguesa[aria-expanded="true"] ~ .menu-navegacion {
            max-height: 300px; /* Se abre de forma elástica hacia abajo */
        }
        ```

        