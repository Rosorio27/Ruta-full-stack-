# Propiedades mas importantes de margin padding y border 

## box model 

    ┌─────────────────────────────┐
    │           margin            │  ← espacio ENTRE elementos
    │  ┌────────────────────────┐ │
    │  │       border           │ │  ← línea del borde
    │  │  ┌──────────────────┐  │ │
    │  │  │    padding       │  │ │  ← espacio interno
    │  │  │  ┌────────────┐  │  │ │
    │  │  │  │  content   │  │  │ │  ← el contenido real
    │  │  │  └────────────┘  │  │ │
    │  │  └──────────────────┘  │ │
    │  └────────────────────────┘ │
    
## Margin y padding 

    padding = espacio entre el contenido y el borde de su propia caja (adentro)

    margin = espacio entre esta caja y las cajas vecinas (afuera)

    atajo: 

        margin: 0 10px 10px 20px;

        margin: 10px;              /* 1 valor → los 4 lados iguales */
        margin: 0 2em;               /* 2 valores → (arriba/abajo) (izquierda/derecha) */
        margin: 0 2em 1em;           /* 3 valores → arriba, (izq/der), abajo */
        margin: 0 10px 10px 20px;    /* 4 valores → arriba, derecha, abajo, izquierda */

    Porcentajes en margin/padding — de qué se calculan

    Si usas % en un margin o padding, el navegador calcula ese porcentaje basándose en el ancho del contenedor padre — nunca en su propia altura, incluso para márgenes de arriba/abajo.

    
    .sidebar {
     width: 300px;
    }

    .sidebar p {
        margin-right: 10%;   /* = 30px (10% de los 300px del padre) */  
    }

## Border 

    Es simplemente una línea que rodea un elemento. Se ubica entre el padding y el margin

    Cada borde tiene 3 propiedades que controlas:

    Propiedad	Qué controla
    Color	Cualquier valor de color que ya conoces (hex, rgb, rgba)
    Width (ancho)	El grosor de la línea — normalmente en px
    Style (estilo)	El tipo de línea

    border-style: solid;    /* línea sólida continua */
    border-style: dotted;   /* puntos */
    border-style: dashed;   /* guiones */
    border-style: double;   /* línea doble */
    border-style: groove;   /* efecto 3D hundido */
    border-style: ridge;    /* efecto 3D elevado */
    border-style: inset;    /* efecto 3D "hacia adentro" */
    border-style: outset;   /* efecto 3D "hacia afuera" */
    border-style: none;     /* sin borde */

    atajo:
    border: 4px solid rgb(255, 0, 0);
            /*      ↑    ↑        ↑
            ancho estilo   color */

## Background color 

    body {
        background-color: rgb(109, 218, 63);
    }
    
    RGBA para fondos semi-transparentes 

    body {
        background-color: rgb(247, 226, 155);   /* un tono tostado/beige sólido */
    }

    .special-div {
        background-color: rgba(255, 255, 255, .75);   /* blanco al 75% de opacidad */
    }

## Border radius 

    .caja {
        background-color: red;
        border-radius: 20px;
    }

    border-radius: 0 30px 10px 5px;

    1er valor → esquina superior-izquierda
    2do valor → esquina superior-derecha
    3er valor → esquina inferior-derecha
    4to valor → esquina inferior-izquierda

    Dos valores — patrón diagonal

        border-radius: 20px 10px;

        Con solo 2 valores: el primero aplica a las esquinas superior-izquierda e inferior-derecha

    La sintaxis con / (barra)

        El valor antes de la barra = radio horizontal
        El valor después de la barra = radio vertical

    El caso más complejo: 4 esquinas, cada una con su propia elipse

        border-radius: 40px 10px 20px 10px / 20px 30px 40px 20px;

## Box shadow 

    box-shadow agrega una sombra alrededor de toda la caja de un elemento

    La sintaxis básica: 4 valores

        box-shadow: 2px 2px 10px #000000;
        /*           ↑   ↑    ↑      ↑
                    horiz vert  blur   color */

    Valor	Qué controla
    1° (horizontal)	Positivo = sombra a la derecha. Negativo = a la izquierda
    2° (vertical)	Positivo = sombra abajo. Negativo = arriba
    3° (radio/blur)	Qué tan difusa es. 0 = nítida. Más alto = más borrosa
    4° (color)	Cualquier color válido — rgba() es especialmente útil aquí

    Usar rgba() (en vez de un color sólido) te permite controlar la opacidad de la sombra

        box-shadow: 4px 4px 8px rgba(0, 0, 0, .75);

    El primer valor OPCIONAL: inset (sombra hacia adentro)

        Por defecto, la sombra se dibuja fuera del elemento (como si flotara).

        box-shadow: inset 4px 4px 8px rgba(0, 0, 0, .75);

## Box sizing 

    width y height — lo básico

        width: 300px;
        height: 20em;
        width: 30%;

    formato de box sizing 

        * {
             box-sizing: border-box;
        }

    overflow — qué hacer cuando el contenido SÍ se desborda

        overflow: visible;   /* default — el contenido se desborda visible, sin control */
        overflow: scroll;    /* siempre agrega scroll, aunque no haga falta */
        overflow: auto;      /* agrega scroll SOLO si es necesario (la opción más inteligente) */
        overflow: hidden;    /* recorta y OCULTA lo que no cabe (puede perder contenido importante) */

    max-width, min-width, max-height, min-height — límites flexibles

        body {
            max-width: 1200px;   /* nunca crece más de esto, aunque la pantalla sea enorme */
        }

        body {
            min-width: 760px;    /* nunca se encoge menos de esto */
        }

