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

    