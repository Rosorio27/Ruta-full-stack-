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