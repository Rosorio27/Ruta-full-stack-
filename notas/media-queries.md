# Media queries

    Es una condicion que se le imponea un css solo si la pantalla comple con cierta caracteristica 

    sintaxis 

    @media (max-width: 600px){ se aplica si la pantalla mide 600px o menos 

        .marco{
            css propiedades 
        }

    }

    condiones mas usadas: 

        @media (max-width: 600px) { }   /* pantallas de 600px o MENOS (típicamente celulares) */
        @media (min-width: 601px) { }   /* pantallas de 601px o MÁS (típicamente tablet/escritorio) */

    La regla mental para no confundirte:

        min-width = "de este ancho para arriba" → se usa en mobile-first (creces desde móvil).

        max-width = "de este ancho para abajo" → se usa en desktop-first (achicas desde escritorio).