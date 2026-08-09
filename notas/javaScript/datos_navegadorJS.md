# Datos y navegadore en Javascript 

## Array 

    Una lista ordenada de valores, guardados en una variable 

    sintaxis: 

        const gastos = [1000, 599, 633]:

## node list 

    una lista de datos especifica que devuelve querySelectorAll ordenada y parecida a un arreglo pero es una estructura propia del DOM no de js 

    nodelist.lenght         //puede contar su tamaño 
    nodelist.forEach        //puede recorrer uno por uno 
    nodeList[0]             //puedes acceder por indice 

## for each 

    Recorre el array y ejecuta una funcion para cada elemento sin devolver nada nuevo 

    sintaxis: 

        const gastos = [1000, 500, 300]; 

        gastos.forEach((gasto) => {
            console.log(gasto);
        });

## array from 

    se utiliza para convertir una nodelist en un array completo 

        const nuevoArray = Array.from(nombrede la lista); 

## Map 

    transformar cada elemento y armar un array nuevo. devuelve un array nuevo y conserva el array original 

    sintaxis:

        const gastos = [1000, 500, 300];

        const gastosConImpuesto = gastos.map((gasto) => gasto *1.15); 

## filter 

    Recorre el array y devuelve un array nuevo, pero solo con los elementos para los cuales la funcion que le pasas devuelve tru. Los que dan false quedan afuera. 

    sintaxis: 

        const gastos = [1000, 500, 800, 200]; 

        const gastosAltos = gastos.filter((gastos) => gastos > 400); 

## Reduce 

    recorre el array y va acumulando un resultado, vueltas tras vuelta hasta devolver un solo valor final 

    sintaxis: 

        const gastos = [1000, 500, 300]; 

        const total = gastos.reduce((acumulador, gasto) => acumulador + gasto, 0); 

## objects 

    Un objeto agrupa datos relacionados bajo un solo nombre, usando pares clave-valor. A diferencia de los array el objeto los organiza por nombre 

    sintaxis: 

        const gasto = {
            nombre: "alquiler", 
            monto: 1000, 
            categoria: "vivienda"
        }; 


    cada nombre se llama propiedad. 

    llamadas de objetos: 

        gasto.nombre; 
        gasto["nombre"];    //se usa cuando el nombre de la propiedad es dinamico 

### Objetos anidados 

    const usuarios {
        nombre: "Carlos", 
        direccion: {
            ciudad: "tegucigalpa", 
            pais: "Honduras"; 
        }
    };

     invocacion: 

        usuarios.direccion.ciudad; 

## Metodos 

    cuando una propiedad de un objeta es una funcion se le llama metodo 

    cosnt gastos = {
        nombre: "alquiler", 
        monto: 100;

        mostrarResumen: function (){
            console.log(`${this.nombre}: $${this.monto}`);
        }
    };

    invocacion: 

        gasto.mostrarResumen(); 

    this hace referencia al mismo objeto 

## array de objetos 

    cada fila es una table que vuevle como un objeto 

    sintaxis: 

        const gastos = [    { nombre: "Alquiler", monto: 1000, categoria: "Vivienda" },
                            { nombre: "Comida", monto: 500, categoria: "Alimentación" },
                            { nombre: "Internet", monto: 400, categoria: "Servicios" }
                        ];
    invocacion: 

        gastos[0];          objeto completo { nombre: "Alquiler", monto: 1000, categoria: "Vivienda" }
        gastos[0].nombre;  "Alquiler" — primero el índice del array, después la propiedad del objeto

## DOM (Document object model)

    Estructura de objetos o arbol. Cuando un navegador carga html no lee todo el archivo. sino que lo convierte en estructura de objetos en mememoria que javascript puede leer y modificar en tiempo real, por eso no necesita cargar la pagina.     

    document = es la puerta de entrada el objeto global que representa toda la pagina. atraves de el accedes a todo lo demas 

    Fomra moderna de innovacacionn: 

        document.querySelecto(".mi-clase");     //para un solo elemento 
        dicument.SelectorAll(".mi-clase");      //Para un grupo de elmento de la misma clase 

### leer y modificar contenido 

    const titulo = document.querySelector("#titlulo"); 

    titulo.textContent;                                 //lee el texto actual 
    titulo.textContent = "nuevo texto"                  //lo reemplaza 

    se usa para buscar una etiqueta y capturarla en una variable, modificar su contenido 
     
    leer una proriedad de ese elemento. textContent, required lenght etc

### :last-child y :ntg-child 

    :last-child = selecciona si es el ultimo hijo de su elemento padre 
    :first-child = selecciona el primer hijo 
    :nth-child = selecciona cualquier elemento por su posicion 
    


### Modificar estilos y clases 

    titlo.style.color = "red"                           //cambia el estilo inline 
    titulo.classlist.add("resaltado");                  //agrega una clase css 
    titulo.classlist.remove("resaltado");               //le quitas una clase 
    titulo.classlist.toggle("resaltado");               //la agrega si no esta, la reemplaza si esta 

### crear y agregar nuevos elementos 

    cosnt nuevoParrafo = document.createElement("p");       //crea el elemento no esta aun en la pagina 
    nuevoParrafo.textContent = "soy nuevo";                 //le pones contenido 
    document.body.appendChild(nuevoParrafo);                //lo agregas al final del body 

### eliminar elemento 

    elemento.remove();                                  //se quita directamente del dom 

## invocacion en el codigo 

    <script src=" nombre del archivo "> defer</script>

    atributo defer= le dice al navegador que ejeucatra este script recien cuando termini de leer todo el html 

## eventos 

sintaxis basica: 

    elemento.addEventListener("click", function(){

        console.log("HICISTE CLICK "); 
    }); 

    Tipos de eventos 

        click
        submit
        input
        keydown

    boton.addEventListener("click", () => {
        const texto = input.value;                          // leer lo que escribió el usuario
        const nuevoLi = document.createElement("li");       // crear (ya lo sabés)
        nuevoLi.textContent = texto;                        // configurar (ya lo sabés)
        lista.appendChild(nuevoLi);                         // insertar (ya lo sabés)
    });

## Localstorage

    es un espacio que el navegador reserva para un sitio web, para guardar datos eque persosntan, sobrevivan a regargar incluso cerrar y volver a abrir el navegador 

### Operaciones basicas

    localStorage.setItem("clave", "valor");         //guardar 
    localStorage.getItem("clave");                  //leer devuelve el valor o null sino existe
    localStorage.removeItem("clave");               //borrar una clave especifica
    localStorage.clear();                           //borrar todo lo guardado 

    sintaxis: 

    localStorage.setItem("nombreUsuario", "Ramon");
    console.log(localStorage.getItem("nombreUsuario"));   // "Ramon"

    LocalStorage solo guarda todos los datos tipo string no te sirve para opeaciones 

### archivo JSON  

    se usan para guardar arrays u objetos  correctamente, los convertir a un string con formato JSON antes de gaurdar y los reconvertir a su forma real al leer 

    localStorage.setItem("gastos", JSON.stringify(gastos));             //convierte el array en archivo JSON y lo gaurda 

    const gastosGuardados = JSON.parse(localStorage.getItem("gastos"));   //lee el texto y lo convierte a array real 

    
    JSON.stringify — "convertí este objeto/array a texto".
    JSON.parse — "convertí este texto de vuelta a objeto/array real".

    