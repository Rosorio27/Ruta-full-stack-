# Grid 
    generalidades: 

        un sistema de layout bidemensional controla filas y columnas al mismo tiempo 

## sintaxis basica

    {
        display:: grid 
        grid-template-column: 200px 200px 200px
        grid-template-rows: 100px 100px 
        gap: 20px
    }

    grid-template-columns — define cuántas columnas hay y qué ancho tiene cada una.
    grid-template-rows — define cuántas filas hay y qué alto tiene cada una.

    grid-template-columns: 1fr 1fr 1fr;   /* 3 columnas que se reparten el espacio en partes iguales */
    grid-template-columns: repeat(3, 1fr);   /* equivale a: 1fr 1fr 1fr */

    repeat(cantidad, patrón);

    grid-column: 1 / -1; ppara llenar el grid-column con las columnas que tenga 

    