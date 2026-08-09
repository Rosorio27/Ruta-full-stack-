# Flexbos (aliniamiento filas y columnas)

## display: flex 

    es un sistema para organizar elementos en una sola direcciona la vez (filas o columnas) distribuyendo el espacion y alineando de forma automatica 

    Nesecita de un padre para funcionar. con un contenedor y un hijo acontinuacion, no funciona para nietos 
    alinea horizontalmente por defecto pero se puede modificar vertical tambien para tener un mayor control 

    header{
        display: flex; 
        flex-direction: column; 
        gap: 20px;  -- esta propieda separa los elementos dentro del flexbox
    }

## propiedades del padre

    display: flex - alinea de forma horizontal 
    
    flex-direction - alineancion del eje principal 

    align-items - de forma vertical los elementos 

    flex-wrap - le da salto de linea a los elementos para que no se vean apiñados horizontalmente 

## propiedades del hijo 

    flex-grow - cuanto crece para llenar el espacio va de 0 a 2 o 3 

    flex-shrink -cuanto se encoge si falta espacio 1(default) 0 

    flex-basic  tanaño base inicial 

    flex (combina los tres anteriores)

## usos reales 

    menu de navegacion 

    tarjetas /cards 

    formularios 

    footer 