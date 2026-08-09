# fase 1 temas: html y css 

## html 

    Estructura semantica basica: header, nav, main, section, footer

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