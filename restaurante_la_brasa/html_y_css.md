## css 

### Rem / em 

    unidades rem se calcula hacia el tamaño predetermido del html 
    unidades em calcula hacie el tamñao de la etiqueta padre 

### porcentaje 

    % se usa mayormente para anchos y altos y siempre es relativo al tañao del contenedor padre 

### vh / vw 

    relativo a la ventana del navegador no a padre 

    vh: viewport height (alto de la ventana)
    vw: wiewport widht (ancho de la ventana)

### Colores 

    codigo hexadecimal: cada par va de 00 a FF

    rgb: utiliza numeros decimales es el mismo resultado 

    rfba: rgb + transparencia 

    HSL: es intuitivo para el humano ajusta los tonos con el mouse 

        h: tono , s: saturacion l: luminosidad 
    
    atributo currentColor: usa el mismo color del texto, util para sombras o icono svg 

### tipografia 

    font famuly : tipo de letra

    fuentes genericas que debes incluir al final por si fallan las demas 

        serif, sans-sefif, monospace

    google fonts: fuentes personalizadas 

        ve a fonts.google.com 
        copia el link y pegalo en el head antes de la hoja de estilos 

    font-weight: el grosor de la letra 

        font-weight: 400 (normal)
        font-weight: 700 (bold)

    line-heigjt: espacio entre linea (interlineado )

    text-align: aliniamento del texto 

### Position 

    Por defecto el documento html tiene una posicion static. De arriba a abajo uno sobre otro 

    Position relative: El elemento se mueve visualmente pero el espacio que ocupaba sigue reservado 

    position absolute: Puede colocarse en cualqueir lugar y no deja rastro. Se situa respescto al ancestro mas cercano que tenga
                        necesito un contenedor con un position: relativo como referencia. sino toma el html completo como referencia total

    position fixed: no deja rastro, pero su punto de referencia es la ventana del navegador si queda anclado a la pantalla anque hagas scroll 

    position sticky: posiciona hasta que su contenedor padre sea superado por el scroll al bajar ahi permanece el bloque estatico mientras su contenedor padre sea visible en la pantalla 

    usos reales: 



### transiciones 

    consiste en una propiedad cambie el valor suevemente durante x tiempo 

    los rangos van de 0.2s a 0.4s para que se sienta la fluidez de la transicion 

    necesita un apuntador a:hover, a:focus etc 

    usos reales: 

        cambio de color en hover
        cambio de borde en focus 
        efecto zoom en hover 
        sombra que aparece en hover 
        menus que se abre y cierra suevamente  

### animaciones 

    @keyframes nombre de la animacion {
        0% {}estado inicial
        50% {}estado intermedio
        100% {}estado final 
    }

    .elemento{
        animacion: nombre de la animacion 2s ease-in-out infiniteve; 
    }                 (nombre)             (duracion)        (repeticion)


   usos reales: 

     aparicion de contenido al cargar 

### Variables en css 

    se usan para guardar un valor y reutilizarlo en todo el proyecto 

    : root {

        --propiedad: valor; 
    }




    



