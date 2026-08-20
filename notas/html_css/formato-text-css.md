# Propiedades mas utilizadas en css: 

## Formato de texto

    1.Font-family para cambiar el tipo de letra 

        p {
            font-family: Arial, Helvetica, sans-serif;
        }

    2.Uso de web fonts

        @font-face {
            font-family: "League Gothic";
            src: url('fonts/League_Gothic.woff2') format('woff2');
        }

    Esto es clave y sigue exactamente igual hoy. Google Fonts no usa las palabras "normal" o "bold" para que elijas qué descargar — usa una escala numérica del 100 al 900:

        Número	Nombre común
        100	Thin (muy delgado)
        300	Light
        400	Regular/Normal
        500	Medium
        700	Bold
        900	Black (muy grueso)

    3. Cambiar color de fuente 

        color: #3E8988;              /* hexadecimal */
        color: rgb(255, 255, 255);   /* RGB */
        color: rgba(255, 100, 50, .5); /* RGB con transparencia */
        color: hsl(0, 100%, 50%); 

    4. Cambiar tamaño de fuente: 

        font-size: 36px;   /* fijo, no depende de nada*/

        em: Relativo al tamaño de fuente de su padre inmediato. Si el padre cambia, el hijo cambia con él.

            .padre { font-size: 20px; }
            .hijo { font-size: 1.5em; }   /* = 30px (1.5 × 20px del padre) */

        rem:  Relativo siempre al <html>, sin importar cuántos padres tenga en medio. Nunca se encadena.

            html { font-size: 16px; }
            .hijo { font-size: 1.5rem; }   /* = 24px, SIEMPRE, sin importar dónde esté anidado */

        Unidad	Úsala para

        px	Tamaños que nunca deben cambiar (bordes, a veces spacing fijo)
        rem	Tamaños de fuente generales del sitio — predecible, sin efecto cascada
        em	Tamaños relativos dentro de un componente específico (ícono vs texto del mismo botón)
        %	Poco usado hoy para fuentes — rem lo reemplazó con más control


    5. Formato de palabras y letras 

       **font-style** — cursiva   

            font-style: italic;
            font-style: normal;   /* para quitarla */

      **font-weight** — negrita, con escala numérica (ya la usas con Google Fonts)

            font-weight: bold;    /* = 700 */
            font-weight: normal;  /* = 400 */
            font-weight: 700;     /* escala 100-900, la que ya usas en Playfair Display */

      **text-transform** — cambiar mayúsculas/minúsculas SIN reescribir el texto

            text-transform: uppercase;    /* TODO EN MAYÚSCULAS */
            text-transform: lowercase;    /* todo en minúsculas */
            text-transform: capitalize;   /* Primera Letra De Cada Palabra */
            text-transform: none;         /* deja el texto tal como está escrito */

      **Sombras en letras**

            text-shadow: -4px 4px 3px #999999;
            /*            ↑    ↑   ↑    ↑
                        horiz  vert blur color */

            /* Múltiples sombras (efecto 3D) */
            text-shadow: -4px 4px 3px #666, 1px -1px 2px #000;


        **Interlineado** 
        
            line-height: 1.5;   /* SIN unidad — la forma recomendada */  

        **Alineacion de texto**

            text-align: center;
            text-align: justify;   /* cuidado: en web se ve peor que en libros, sin hyphenation */

        text-indent — sangría de primera línea (poco usado en web moderno)

            text-indent: 25px;   /* estilo "libro impreso", raro en diseño web actual */

        **viñetas** 

            list-style-type: none;   /* ya lo usas en nav ul, footer, etc. */
            list-style-type: disc;      /* ● redondo relleno (default de ul) */
            list-style-type: circle;    /* ○ redondo hueco */
            list-style-type: square;    /* ■ cuadrado */
            list-style-type: decimal;   /* 1, 2, 3 (default de ol) */
            list-style-type: upper-alpha;  /* A, B, C */
            list-style-type: lower-roman;  /* i, ii, iii */

            