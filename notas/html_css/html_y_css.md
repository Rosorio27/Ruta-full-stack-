# fase 1 temas: html y css 

## html 

    Estructura semantica basica: header, nav, main, section, footer

### Etiquetas html semanticas

    **Header:** Es el contnedor de introduccion o navegacion de tu sitio. Suele llevar el logo, el memu principal o buscadores globales.
    
    **nav:** Para menus de navegacion o enlaces. 
    
    **main:** para el contenido principal unico 
    
    **seccion:** Define una seccion tematica autonoma dentro del documento. **regla de oro** debe llevar un <h2-h6> que explique de que se tratra, sino esta regla no se cumple usa un div no seccction 

    **article:** Para contenido independiente (servicios, posts)

    **footer:** para info de contacto/copyright 
    
    **atributos data-* ** se usan para controlas junto con js los elementos html 

    **atributo loading: "lazy"**: le dice al navegador que no descargue la imagen inmediatamente, sino que espere hasta que el usuario haga scroll y esté a punto de llegar a la zona donde se encuentra la imagen.

    **<picture>**: es un contenedor inteligente que permite mostrar diferentes versiones de una imagen según el tamaño de la pantalla, la resolución o el formato compatible del dispositivo Carga archivos ligeros solo cuando el equipo del usuario lo necesita.

    resoluciones: 

       -Móvil (Default): Todo lo que mida menos de 768px. Es la imagen base que se carga por defecto (siguiendo la filosofía Mobile-First).
       -Tablet (md): Desde 768px hasta 1024px (cubre pantallas medianas y iPads).
       -Escritorio (lg / xl): Desde 1024px en adelante (cubre laptops y monitores grandes).

        <!-- 1. Pantallas de computadora (Escritorio) -->
        <source media="(min-width: 1024px)" srcset="banner-desktop.webp">

        <!-- 2. Pantallas de tablet (Medianas) -->
        <source media="(min-width: 768px)" srcset="banner-tablet.webp">

        <!-- 3. Pantallas de celulares (Por defecto / Mobile-First) -->
        <img src="banner-mobile.webp" alt="Diseño simplificado para producción">

        usos: 

            🖼️ Banners principales y fondos (Hero Images)
            Fotos de productos de E-commerce
            🎨 Logotipos o gráficos con texto integrado
    
    **<blockquete>**: para representar citas textuales largas que provienen de otra fuente (como un libro, un autor, un discurso o
                        un sitio web externo). El atributo moderno: **cite** Para que tu código sea 100% profesional y limpio ante los ojos de Google (SEO), puedes usar el atributo cite dentro de la etiqueta para indicar la URL de donde sacaste la información

    **form:** son aquellos que se construyen utilizando únicamente las etiquetas, atributos y validaciones que el propio navegador web  
            trae integrados de fábrica, sin depender de librerías externas de JavaScript

    Tipos de input: 

        1. type="email": Valida automáticamente que el texto tenga una estructura de correo (usuario@dominio.com)
        2.type="tel": Abre el teclado numérico en celulares
        3.type="date": Despliega un calendario nativo del sistema operativo (iOS, Android, Windows) para elegir fechas de forma cómoda.
        4.type="number": Añade flechas para subir/bajar y restringe el texto a solo números
        5.type="color": Abre la paleta de colores nativa del dispositivo
        6.type="range": Crea una barra deslizable (slider) para elegir un rango numérico.

    Validaciones nativas: 

        -required: Hace que el campo sea obligatorio. Si intentas enviar el formulario vacío, el navegador detiene el envío y muestra un mensaje de alerta flotante
        -.minlength y maxlength: Controlan el mínimo y máximo de caracteres permitidos (ej. minlength="8" para contraseñas)
        -.min y max: Controlan los valores numéricos mínimos y máximos (ej. para restringir que solo entren mayores de 18 años)
        -.pattern: Permite usar Expresiones Regulares (RegEx) directamente en HTML para validar cosas complejas, como un formato de cédula o una contraseña que requiera mayúsculas y números.

    Atributo action y method: Trabajan juntos para definir a dónde se envían los datos del formulario y cómo se transportan a través de internet.

   **Action**: Destino en el servidor: Normalmente apunta a un archivo de backend (como /enviar-datos, procesar.php, api/v1/users, etc.)
   **Method**:El atributo method define el protocolo HTTP que se utilizará para transferir los datos.

        Método GET (Público y visible) Envía los datos agregándolos directamente al final de la URL de la barra de direcciones. se usa: Para búsquedas, filtros o consultas donde no se maneje información confidencial.

        Método POST (Oculto y seguro) Envía los datos de forma "invisible" dentro del cuerpo de la petición HTTP (HTTP Request Body). Los datos no aparecen en la barra de direcciones de la URL. se usa: Para crear usuarios, iniciar sesión, enviar mensajes de contacto, subir archivos o procesar pagos

    **Fieldset:** Sirve para agrupar de forma lógica varios campos de entrada (<input>, <select>, <textarea>) que tienen relación entre sí.

     Si le añades el atributo disabled al <fieldset> (así: <fieldset disabled>), bloquearás automáticamente todos los inputs que estén en su interior de un solo golpe, sin necesidad de desactivarlos uno por uno con JavaScript.

    **legend**: Es la etiqueta que define el título o la etiqueta del grupo

    **label e input**: son la pareja más importante de cualquier formulario en la web. Trabajan de la mano: el <input> es el campo donde el usuario escribe o interactúa, y el <label> es el texto que explica qué información se está pidiendo

        Relacionar input y label: Utilizas el atributo for en el <label> y lo haces coincidir exactamente con el atributo id del <input>.

        <label for="correo-usuario">Correo Electrónico:</label>
        <input type="email" id="correo-usuario" name="email">



        
## css 

    Referenciar una hoja de estilo: 

    <link rel="stylesheet" href="estilos.css">

### Reglas de especificidad 

    #id:        mas especifo 
    .clase:     especifico medio 
    etiquetda:  menos especifico

### Herencia 

    Un hijo recibe el valor de su padre cuando el hijo no tiene ninguna regla propia 

### Cascada 

    Decide quien gana cuando hay el mismo selector, escrito mas de una vez con l amismas especificidad 

## Selectores

    -etiqueta HTML
    -clase (.clase)
        -multiples clases 
    -selector por ID (#id)
    -selector universal (*) = * { font-weight: bold};
    -Pseudoclases:

        -a:link
        -a:visited
        -a:hover
        -a:active

    -   :before (agrega antes del contenido real)
    -   :after  (agrega despues del contenido real)
    
    -selector por atributo: 

        img[tittle] {
            border: 2px solid black; 
        }

    -selector por valor exacto: 

        input[type="text"] {
            border: 1px solid gray;
        }
    
    -selector que empieza con: 

        a[href^="http://"] {
            color: green;
        }

    -selector que termina con: 

        a[href$=".pdf"] {
            background: url(icono-pdf.png) no-repeat;
            padding-left: 20px;
        }
    
    -selector que contiene: 

        img[src*="headshot"] {
            border: 3px solid green;
        }

    - selector hijo directo > :

        body > h1 {
            color: red;
        }

    - :first-child — selecciona el primer hijo de su padre

        li:first-child {
            font-weight: bold;
        }
    
    - :last-child — el último hijo

        li:last-child {
            color: red; 
        }

    - :nth-child() : mediante patron especifico construye la regla 

    -Selector de hermano adyacente (+)

        h2 + p {
            margin-top: 0;
            font-style: italic;
        }

    

### Model box 

    Todo elemento html es en el fondo una caja rectangular compuesta por 4 capas de adentro hacia afuera 
    1.Content -texto o imagen 
    2.Padding - espacio interno entre el contenido y el borde 
    3.Border - el borde de la caja 
    4.margin - espacio externo entre esta caja y los elementos vecinos

    content-box 
    se usa por default se le suma el tamaño del padding interno y hace que ocupe mas esapcion la caja

    box-sizing: border-box 
    mantiene la relacion del tamaño del contenido y no suma el padding, dando un tamaño esperado 

    solucion: se le aplica box-sizing a todo el documneto 

    * {

        box-sizing: border-box; 
    }

### Colores y unidades 

    color: #FFF6733;                  Hexadecimal 
    color: rgb(255, 87, 51);        rgb 
    color: rgba(255, 87, 51, 0.5)   rgb con transparencia 

    unidad |        descripcion                         |                           uso
    px     |  pixeles fijos                             |   Bordes, sombras, cosas que no escalan con el texto
    %      |  Porcentaje padre                          |   anchos fluidos, layouts responsive 
    em     |  relativo font-siz del elemento padre      |   Espacios que deben escalar en el texto cercano
    rem    |  Relativo font-size de la raiz html        |   La mas recomendada hoy en dia para casi todo 
    vh/vw  |  porcentaje del alto y ancho de la ventana |   Elementos a pantalla completa, hero sections 

## overflow 

    Se usa para el desbordamiento dentro del contenedor 

    visible: por defercto el contenido se desborda 

    hidden: oculta dentro de contenedor no se sale 

    scroll: se muestra barra scroll a los lados y abajo 

    auto: muestra las barras solo si son necesarias 

## position 

    static: por defecto. no tiene efecto top, right, botton y left 

    relative: El el elemento de referencia para cualquier clase hija (absolute)

    absolute: se posiciona con top/right/botton/left respesto a relative si no tiene ningun ancestro se posicion respeto a todo html

    fixed: se posicion en cualquier lugar respectoa  l aventana del navegador 

    sticky: se puede dejar fijo un elemento 

        top — distancia desde el borde superior
        right — distancia desde el borde derecho
        bottom — distancia desde el borde inferior
        left — distancia desde el borde izquierdo
        z-index — orden de apilamiento cuando hay superposición

## Object-fit 

    controla como una imagen o video se ajusta dentro de su  contenedor cuando las proporciones no coinciden exactamente 

    fill: estira la imagen para llenar completamente el contenedor aunque se distorcione 

    cover: la imagen cubre todo el contenedor sin distorsionarse  pero recorla lo que sobra. 

    contain: la imagen se escala para caber completa dentro del contenedor, sin recortarse ni distorsionarse. puede derjar espacios vacios 

## display

    block: El elemento ocupa todo el ancho disponible y siempre empieza en una nueva linea 

    inline: El elemento solo ocupa el espacio de us contenido. no respeta width y heght

    inline-block: combina elementeo en linea pero respeta otros atributos 

    flex: convierte al elementeo en un contenedor flexible. 

    grid: convierte al elementeo en un contenedor cuadricula 

    none: desaparece completamente un elemento. 