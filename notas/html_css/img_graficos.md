# Imagenes y graficos 

## img mediante css 

body {
    background-image: url(images/bg.png);
}

    formatos de imagen 

        GIF	Imágenes simples con animación	Prácticamente reemplazado por PNG8/WebP
        JPEG	Fotos con muchos colores	Sigue vigente, muy usado
        PNG	Logos, íconos, imágenes con transparencia	Sigue vigente
        SVG	Íconos, logos, gráficos vectoriales (no fotos)	Muy vigente hoy, cada vez más usado

## Repeticion de fondos

    body {
        background-image: url(imagen.png);
    }

    Si solo pones background-image sin ninguna otra propiedad, la imagen se repite automáticamente (mosaico/tile)

    2. background-repeat — controlas si se repite y cómo

        background-repeat: no-repeat;background-repeat: repeat;      /* default — se repite en ambas direcciones */
        background-repeat: no-repeat;   /* se muestra UNA sola vez, sin repetirse */
        background-repeat: repeat-x;    /* se repite SOLO horizontalmente (eje X) */
        background-repeat: repeat-y;    /* se repite SOLO verticalmente (eje Y) */

        background-repeat: round;       /*Repite la imagen, pero nunca la corta*/
        background-repeat: space;       También evita cortar la imagen, pero en vez de estirarla, agrega espacio extra entre las copias

## Background position 

    1. background-position — dónde empieza la imagen

        background-position: center center;   /* horizontal vertical */
        background-position: right top;
        background-position: left bottom;

        background-position: 5px 8px;
/*                            ↑    ↑
                            horiz  vert */

    2. background-attachment — ¿la imagen se mueve con el scroll o se queda fija?

        background-attachment: scroll;   /* default — se mueve junto con el contenido al hacer scroll */
        background-attachment: fixed;    /* se queda FIJA en su lugar, aunque hagas scroll *

    3. background-origin y background-clip — controlar desde dónde empieza y hasta dónde llega la imagen

        background-origin: content-box;   /* la imagen empieza en el borde del CONTENIDO, no del padding */
        background-clip: content-box;      /* la imagen se corta en el borde del CONTENIDO */

    4. background-size — el que ya usas y dominas bien

        background-size: 100px 200px;   /* ancho y alto exactos */
        background-size: 100% 100%;      /* estira para llenar completamente (puede distorsionar) */
        background-size: contain;        /* cabe completa dentro, sin recortar, sin distorsionar */
        background-size: cover;          /* llena todo el espacio, puede recortar, sin distorsionar */

## Multiples backgrounds

   background-image: url(scrollTop.jpg),      /* capa superior */
                   url(scrollBottom.jpg),   /* capa media */
                   url(scrollMiddle.jpg);   /* capa inferior (la de fondo) */
                   
    background-repeat: no-repeat,   /* aplica a scrollTop */
                    no-repeat,   /* aplica a scrollBottom */
                    repeat-y;    /* aplica a scrollMiddle */

## Gradiante en css

    Una transición suave de un color a otro, generada directamente por CSS

    2. linear-gradient() — transición en línea recta

        background-image: linear-gradient(to bottom, red, yellow);

        Primer valor: la dirección hacia donde "fluye" el gradiente
        Resto de valores: los colores por los que pasa, en orden

    Las direcciones disponibles:

        linear-gradient(to bottom, ...);   /* de arriba hacia abajo (default si omites la dirección) */
        linear-gradient(to top, ...);      /* de abajo hacia arriba */
        linear-gradient(to right, ...);    /* de izquierda a derecha */
        linear-gradient(to left, ...);     /* de derecha a izquierda */
        linear-gradient(to bottom right, ...);  /* diagonal */

    Con ángulos exactos (más control, para diagonales precisas)

        linear-gradient(45deg, red, yellow);

    3. Puedes usar más de 2 colores

        linear-gradient(to right, red, yellow, green, blue);

    4. Controlar EN QUÉ PUNTO exacto aparece cada color (color stops)

        linear-gradient(to right, red 0%, yellow 30%, blue 100%);

    5. radial-gradient() — gradiente circular/elíptico desde un punto central

        background-image: radial-gradient(circle, red, yellow, blue);
        radial-gradient(circle at top left, red, yellow);

    6. Repetir gradientes — repeating-linear-gradient() y repeating-radial-gradient()

        background-image: repeating-linear-gradient(45deg, red, yellow 10px);

    7. Combinar gradiente + imagen — LO MÁS ÚTIL de este capítulo para ti

        background-image: linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), 
                   url(foto.jpg);

    se puede aplicar a un fondo 

            #banner {
                     background-image: linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)),
                       url('imagenes/mobileImage.jpeg');
                    background-size: cover;
                    background-position: center;
            }



    