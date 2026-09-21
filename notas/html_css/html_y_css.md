# fase 1 temas: html y css 

## html 

    Estructura semantica basica: header, nav, main, section, footer

### Estructura semantica basica

- **Header:** Es el contenedor de introducción o navegación de tu sitio. Suele llevar el logo, el menú principal o buscadores globales.  
- **nav:** Para menus de navegacion o enlaces. 
- **main:** para el contenido principal unico   
- **Section:** Define una sección temática autónoma dentro del documento. **Regla de oro**: debe llevar un `<h2-h6>` que explique de qué se trata. Si no se cumple esta regla no se debe usar un `div`,
sino usar un `section`.
- **article:** Para contenido independiente (servicios, posts)
- **footer:** para info de contacto/copyright 

### Atributos de Html
- **atributos data-*** se usan para controlas junto con js los elementos html 
- **Atributo loading: "lazy"**: Le dice al navegador que no descargue la imagen inmediatamente, sino que espere hasta que el usuario haga scroll y esté a punto de llegar a la zona donde se encuentra la imagen.

### Etiqueta picture para responsive Images
- **resoluciones:** 
    - Móvil (Default): Todo lo que mida menos de 768px. 
    - Tablet (md): Desde 768px hasta 1024px (cubre pantallas medianas y iPads).
    - Escritorio (lg / xl): Desde 1024px en adelante (cubre laptops y monitores grandes).

```html
<picture>
    <source media="(min-width: 1024px)" srcset="banner-desktop.webp">
    <source media="(min-width: 768px)" srcset="banner-tablet.webp">
    <img src="banner-mobile.webp" alt="Diseño simplificado para producción">
</picture>
```
- **Usos** de la etiqueta picture para **responsive**: 
    - Banners principales y fondos (Hero Images)
    - Fotos de productos de E-commerce
    - Logotipos o gráficos con texto integrado
    
### Blockquote y Cite
- **Blockquote**: Para representar citas textuales largas que provienen de otra fuente (como un libro, un autor, etc.).
- **Cite**: Para atribuir la cita a su fuente original.

```html
<blockquote>
  Esta es una cita importante.
  <footer>Cita de <cite>John Doe</cite></footer>
</blockquote>
```

### fORMULARIOS 
- **Atributo `action` y `method`**:
  - `Action`: Destino en el servidor (normalmente apunta a un archivo de backend).
  - `Method`: Protocolo HTTP para transferir los datos (GET o POST).

   ```html
  <form action="/enviar-datos" method="POST">
    <label for="nombre">Nombre:</label>
    <input type="text" id="nombre" name="nombre">
    <button type="submit">Enviar</button>
  </form>
  ```
- **Métodos de Formulario**:
  - **GET**: Envía los datos agregándolos directamente a la URL (publico y visible, no recomendado para información sensible).
  - **POST**: Envía los datos de forma "invisible" dentro del cuerpo de la petición HTTP (seguro y recomendado para información sensible).

### Atributos de Formularios
- **Fieldset**: Sirve para agrupar de forma lógica varios campos de entrada (`<input>`, `<select>`, `<textarea>`) que tienen relación entre sí.
  - `disabled`: Bloquear todos los inputs que estén en su interior con un solo golpe.

  ```html
<fieldset disabled>
  <legend>Información Personal</legend>
  <label for="nombre">Nombre:</label>
  <input type="text" id="nombre" name="nombre">
</fieldset>
```

- **Legend**: Define el título o la etiqueta del grupo.
```html
<legend>Información Personal</legend>
```

- **Label e Input**: Trabajan de la mano: el `<input>` es el campo donde el usuario escribe o interactúa, y el `<label>` es el texto que explica qué información se está pidiendo.
  - `for`: Utilizas el atributo `for` en el `<label>` y lo haces coincidir exactamente con el atributo `id` del `<input>`.

```html
<label for="nombre">Nombre:</label>
<input type="text" id="nombre" name="nombre">
```
### Tipos de Input
HTML ofrece una variedad de tipos de inputs que se pueden usar en formularios para recoger diferentes tipos de datos. Cada tipo de input tiene una funcionalidad específica y una apariencia predeterminada
que facilita la interacción del usuario.

### 1. Text
Sirve para recoger texto simple, como nombres, direcciones, descripciones, etc.
```html
<input type="text" id="nombre" name="nombre" placeholder="Nombre">
```

### 2. Email
Para recoger direcciones de correo electrónico.
```html
<input type="email" id="email" name="email" placeholder="Correo Electrónico">
```

### 3. Password
Para recoger contraseñas de usuario.
```html
<input type="password" id="contrasena" name="contrasena" placeholder="Contraseña">
```

### 4. Number
Para recoger números, como edades, cantidades, etc. Incluye flechas de incremento y decremento.
```html
<input type="number" id="edad" name="edad" min="18" max="100">
```

### 5. Tel
Para recoger números de teléfono.
```html
<input type="tel" id="telefono" name="telefono" placeholder="Teléfono">
```

### 6. Date
Para seleccionar fechas. Muestra un calendario nativo en dispositivos móviles.
```html
<input type="date" id="fechaNacimiento" name="fechaNacimiento">
```

### 7. Radio Button
Para seleccionar una única opción de una lista.
```html
<input type="radio" id="hombre" name="sexo" value="hombre">
<label for="hombre">Hombre</label>
<input type="radio" id="mujer" name="sexo" value="mujer">
<label for="mujer">Mujer</label>
```

### 8. Checkbox
Para seleccionar una o varias opciones de una lista.
```html
<input type="checkbox" id="terminos" name="terminos" value="acepto">
<label for="terminos">Acepto los términos y condiciones</label>
```

### 9. File
Para cargar archivos, como imágenes, documentos, etc.
```html
<input type="file" id="archivo" name="archivo" accept=".jpg,.png" multiple>
```

### 10. Hidden
Para ocultar un input que no se muestra al usuario, pero que se envía al servidor.
```html
<input type="hidden" id="usuarioId" name="usuarioId" value="12345">
```

### 11. Submit
Para enviar el formulario.
```html
<button type="submit">Enviar</button>
```

### 12. Reset
Para restablecer todos los inputs del formulario a sus valores iniciales.
```html
<button type="reset">Reiniciar</button>
```

### 13. Button
Para ejecutar un evento de JavaScript.
```html
<button type="button" onclick="miFuncion()">Haz algo con JavaScript</button>
```

### 14. Select
Para crear una lista desplegable de opciones.
```html
<select id="pais" name="pais">
  <option value="es">España</option>
  <option value="us">Estados Unidos</option>
  <option value="fr">Francia</option>
</select>
```

### 15. Textarea
Para recoger texto largo o multi-linea.
```html
<textarea id="comentarios" name="comentarios" placeholder="Deja tus comentarios"></textarea>
```

### 16. Url
Para recoger URLs.
```html
<input type="url" id="url" name="url" placeholder="URL">
```

### 17. Color
Para seleccionar un color.
```html
<input type="color" id="color" name="color" value="#ff0000">
```

### 18. Range
Para seleccionar un valor dentro de un rango específico, como un deslizador.
```html
<input type="range" id="edad" name="edad" min="18" max="100">
```
### Validaciones basicas 
1. **Required**
   - **Descripción**: Especifica que el campo es requerido y no debe estar vacío.
   - **Ejemplo**:
     ```html
     <input type="text" id="nombre" name="nombre" required>
     ```

2. **Pattern**
   - **Descripción**: Permite especificar un patrón regex para validar el contenido del input.
   - **Ejemplo**:
     ```html
     <input type="text" id="nombre" name="nombre" pattern="[a-zA-Z]{3,}" title="Debes escribir al menos 3 letras">
     ```

3. **Min** y **Max**
   - **Descripción**: Establecen el rango de valores aceptables para los inputs de tipo `number`, `date`, etc.
   - **Ejemplo**:
     ```html
     <input type="number" id="edad" name="edad" min="18" max="100">
     ```

4. **Minlength** y **Maxlength**
   - **Descripción**: Establecen la longitud mínima y máxima de los caracteres que se pueden ingresar en el input.
   - **Ejemplo**:
     ```html
     <input type="text" id="nombre" name="nombre" minlength="3" maxlength="50">
     ```

### Validaciones Específicas

1. **Email**
   - **Descripción**: Valida automáticamente que el texto tenga una estructura de correo electrónico (usuario@dominio).
   - **Ejemplo**:
     ```html
     <input type="email" id="email" name="email" required>
     ```

2. **Url**
   - **Descripción**: Valida automáticamente que el texto tenga una estructura de URL.
   - **Ejemplo**:
     ```html
     <input type="url" id="url" name="url" required>
     ```

3. **Tel**
   - **Descripción**: Valida automáticamente que el texto tenga una estructura de número de teléfono.
   - **Ejemplo**:
     ```html
     <input type="tel" id="telefono" name="telefono" required>
     ```

4. **Number**
   - **Descripción**: Permite especificar un valor mínimo y máximo para un input de tipo número.
   - **Ejemplo**:
     ```html
     <input type="number" id="edad" name="edad" min="0" max="120">
     ```

- **Atributos de UX Nativa (autocomplete)**:
  - `autocomplete`: Le dice al navegador qué tipo de dato va ahí para que sugiera rellenarlo con un solo clic usando los datos guardados del usuario.

```html
<label for="correo">Correo Electrónico:</label>
<input type="email" id="correo" name="correo" autocomplete="email">
```
- **Autofocus**: Coloca el cursor automáticamente en ese campo de texto apenas se carga la página.

```html
<input type="text" id="nombre" name="nombre" autofocus>
```
son 
- **Button**: Elemento nativo de HTML diseñado para que los usuarios realicen acciones en tu página web.
  - `type="submit"`: Sirve para procesar y enviar todos los datos del formulario hacia la ruta especificada en el `action`.
  - `type="button"`: Es un botón "neutro". No hace nada de forma nativa. Se utiliza exclusivamente para conectarle eventos de programación con JavaScript.
  - `type="reset"`: Borra instantáneamente todo lo que el usuario haya escrito en los inputs del formulario, regresándolos a su estado original vacío.

```html
<button type="submit">Enviar</button>
<button type="button" onclick="miFuncion()">Haz algo con JavaScript</button>
<button type="reset">Reiniciar</button>
```






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

## Selectores

    -etiqueta HTML
    -clase (.clase)
        -multiples clases 
    -selector por ID (#id)
    -selector universal (*) = * { font-weight: bold};
    -Pseudoclases:

        -a:link
        -a:visited
        -a:hover
        -a:active

    -   :before (agrega antes del contenido real)
    -   :after  (agrega despues del contenido real)
    
    -selector por atributo: 

        img[tittle] {
            border: 2px solid black; 
        }

    -selector por valor exacto: 

        input[type="text"] {
            border: 1px solid gray;
        }
    
    -selector que empieza con: 

        a[href^="http://"] {
            color: green;
        }

    -selector que termina con: 

        a[href$=".pdf"] {
            background: url(icono-pdf.png) no-repeat;
            padding-left: 20px;
        }
    
    -selector que contiene: 

        img[src*="headshot"] {
            border: 3px solid green;
        }

    - selector hijo directo > :

        body > h1 {
            color: red;
        }

    - :first-child — selecciona el primer hijo de su padre

        li:first-child {
            font-weight: bold;
        }
    
    - :last-child — el último hijo

        li:last-child {
            color: red; 
        }

    - :nth-child() : mediante patron especifico construye la regla 

    -Selector de hermano adyacente (+)

        h2 + p {
            margin-top: 0;
            font-style: italic;
        }

    

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