# Estructura basica

- **Header:** Es el contenedor de introducción o navegación de tu sitio. Suele llevar el logo, el menú principal o buscadores
  globales.
- **nav:** Para menus de navegacion o enlaces.
- **main:** para el contenido principal unico
- **Section:** Define una sección temática autónoma dentro del documento. **Regla de oro**: debe llevar un `<h2-h6>` que
  explique de qué se trata. Si no se cumple esta regla no se debe usar un `div`, sino usar un `section`.
- **article:** Para contenido independiente (servicios, posts)
- **footer:** para info de contacto/copyright

## Reglas logicas

- Vincular oblicatoriamente las etiquetas de <h2-h6> para validar semanticamente una section
- El div se utiliza cuando quieres separar una seccion de la pagina que no tenga carga semantica
- Solo puede haber un main por proyecto

## Atributo de rendimiento y multimedia avanzada

- **atributos data-\*** se usan para controlas junto con js los elementos html
- **Atributo loading: "lazy"**: Le dice al navegador que no descargue la imagen inmediatamente, sino que espere hasta que el
  usuario haga scroll y esté a punto de llegar a la zona donde se encuentra la imagen.
- <picture>: contenedor responsive para imagenes.
  - **medidas de resoluciones:**
    - 1. Para móvil: 768px.
    - 2. Tablet: Desde 768px hasta 1024px
    - 3. Escritorio: Desde 1024px en adelante

- **Usos comunes**:
  - Banners principales y fondos (Hero Images)
  - Fotos de productos de E-commerce
  - Logotipos o gráficos con texto integrado
  ```html
  <picture>
    <source media="(min-width: 1024px)" srcset="banner-desktop.webp" />
    <source media="(min-width: 768px)" srcset="banner-tablet.webp" />
    <img src="banner-mobile.webp" alt="Diseño simplificado para producción" />
  </picture>
  ```
- **Uso de width y height para rendimiento de img, videos, iframe**: Para evitar CLS (cumulative layout Shift) descarga brusca
  de imagenes o videos mientras el navegador descarga por primera vez. Usar el ancho y largo fijo sin px como medida de rendimiento.

  ```html
  <picture class="card-producto__galeria">
    <img
      src="/src/img/canasta.jpg"
      alt="Canasta de verduras"
      class="card-producto__img"
      width="600"
      height="400"
      loading="lazy"
    />
  </picture>
  ```

- **Blockquote y Cite**:
  - **Blockquote**: Para representar citas textuales largas que provienen de otra fuente (como un libro, un autor, etc.).
  - **Cite**: Para atribuir la cita a su fuente original.

  ```html
  <blockquote>
    Esta es una cita importante.
    <footer>Cita de <cite>John Doe</cite></footer>
  </blockquote>
  ```

## formularios

- **Atributo `action` y `method`**:
  - `Action`: Destino en el servidor (normalmente apunta a un archivo de backend).
  - `Method`: Protocolo HTTP para transferir los datos (GET o POST).
  - `enctype`: multipart/form-data para transportar megabytes binarios reales hacia el servido

  ```html
  <form action="/enviar-datos" method="POST"  enctype="multipart/form-data>
   <label for="nombre">Nombre:</label>
   <input type="text" id="nombre" name="nombre">
   <button type="submit">Enviar</button>
  </form>
  ```

- **Métodos de Formulario**:
  - **GET**: Envía los datos agregándolos directamente a la URL (publico y visible, no recomendado para información sensible).
  - **POST**: Envía los datos de forma "invisible" dentro del cuerpo de la petición HTTP (seguro y recomendado para información sensible).

- **Fieldset**: Sirve para agrupar de forma lógica varios campos de entrada (`<input>`, `<select>`, `<textarea>`) que tienen relación entre sí.
  - `disabled`: Bloquear todos los inputs que estén en su interior con un solo golpe.

  ```html
  <fieldset disabled>
    <legend>Información Personal</legend>
    <label for="nombre">Nombre:</label>
    <input type="text" id="nombre" name="nombre" />
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
    <input type="text" id="nombre" name="nombre" />
    ```

- **Tipos de Input:** HTML ofrece una variedad de tipos de inputs que se pueden usar en formularios para recoger diferentes
  tipos de datos. Cada tipo de input tiene una funcionalidad específica y una apariencia predeterminadaque facilita la interacción del usuario.
  1. Text: Sirve para recoger texto simple, como nombres, direcciones, descripciones, etc.
     ```html
     <input type="text" id="nombre" name="nombre" placeholder="Nombre" />
     ```
  2. Email: Para recoger direcciones de correo electrónico.
     ```html
     <input
       type="email"
       id="email"
       name="email"
       placeholder="Correo Electrónico"
     />
     ```
  3. Password: Para recoger contraseñas de usuario.
     ```html
     <input
       type="password"
       id="contrasena"
       name="contrasena"
       placeholder="Contraseña"
     />
     ```
  4. Number: Para recoger números, como edades, cantidades, etc. Incluye flechas de incremento y decremento.
     ```html
     <input type="number" id="edad" name="edad" min="18" max="100" />
     ```
  5. Tel: Para recoger números de teléfono.
     ```html
     <input type="tel" id="telefono" name="telefono" placeholder="Teléfono" />
     ```
  6. Date: Para seleccionar fechas. Muestra un calendario nativo en dispositivos móviles.
     ```html
     <input type="date" id="fechaNacimiento" name="fechaNacimiento" />
     ```
  7. Radio Button: Para seleccionar una única opción de una lista.
     ```html
     <input type="radio" id="hombre" name="sexo" value="hombre" />
     <label for="hombre">Hombre</label>
     <input type="radio" id="mujer" name="sexo" value="mujer" />
     <label for="mujer">Mujer</label>
     ```
  8. Checkbox: Para seleccionar una o varias opciones de una lista.
     ```html
     <input type="checkbox" id="terminos" name="terminos" value="acepto" />
     <label for="terminos">Acepto los términos y condiciones</label>
     ```
  9. File: Para cargar archivos, como imágenes, documentos, etc.
     ```html
     <input
       type="file"
       id="archivo"
       name="archivo"
       accept=".jpg,.png"
       multiple
     />
     ```
  10. Hidden: Para ocultar un input que no se muestra al usuario, pero que se envía al servidor.
      ```html
      <input type="hidden" id="usuarioId" name="usuarioId" value="12345" />
      ```
  11. Submit: Para enviar el formulario.
      ```html
      <button type="submit">Enviar</button>
      ```
  12. Reset: Para restablecer todos los inputs del formulario a sus valores iniciales.
      ```html
      <button type="reset">Reiniciar</button>
      ```
  13. Button: Para ejecutar un evento de JavaScript.
      ```html
      <button type="button" onclick="miFuncion()">
        Haz algo con JavaScript
      </button>
      ```
  14. Select: Para crear una lista desplegable de opciones.
      ```html
      <select id="pais" name="pais">
        <option value="es">España</option>
        <option value="us">Estados Unidos</option>
        <option value="fr">Francia</option>
      </select>
      ```
  15. Textarea: Para recoger texto largo o multi-linea.
      ```html
      <textarea
        id="comentarios"
        name="comentarios"
        placeholder="Deja tus comentarios"
      ></textarea>
      ```
  16. Url: Para recoger URLs.
      ```html
      <input type="url" id="url" name="url" placeholder="URL" />
      ```
  17. Color: Para seleccionar un color.
      ```html
      <input type="color" id="color" name="color" value="#ff0000" />
      ```
  18. Range: Para seleccionar un valor dentro de un rango específico, como un deslizador.
      ```html
      <input type="range" id="edad" name="edad" min="18" max="100" />
      ```

## atributos de formularios

- **Accept:** Permite especificar los tipos de archivos que un usuario puede seleccionar al subir un archivo. Esto mejora la
  experiencia del usuario al evitar que puedan seleccionar archivos no compatibles y puede facilitar la validación del lado del cliente.

Aquí tienes una lista de los tipos de archivos que puedes especificar utilizando el atributo `accept`:

1. **MIME Types**: Puedes especificar MIME types para permitir solo ciertos tipos de archivos. Por ejemplo:
   - `image/*`: Imágenes
   - `application/pdf`: Archivos PDF
   - `application/msword`: Archivos de Word
   - `video/*`: Vídeos
   - `audio/*`: Audio

2. **Extensión de Archivo**: Puedes especificar extensiones de archivo separadas por comas. Por ejemplo:
   - `image/png, image/jpeg`: Imágenes PNG e JPEG
   - `application/pdf, application/msword`: Archivos PDF y Word
   - `video/mp4, video/quicktime`: Vídeos MP4 y QuickTime

3. **Múltiples Tipos**: Puedes combinar MIME types y extensiones de archivo. Por ejemplo:
   - `image/png, image/jpeg, application/pdf`: Imágenes PNG e JPEG y archivos PDF

   ```html
   <form
     action="/subir-comprobante"
     method="POST"
     enctype="multipart/form-data"
   >
     <fieldset>
       <legend>Documentación de Respaldo</legend>
       <label for="comprobante-pago"
         >Sube tu comprobante (Solo imágenes o PDF):</label
       >
       <input
         type="file"
         id="comprobante-pago"
         name="comprobante"
         accept="image/*, .pdf"
         multiple
         required
       />
     </fieldset>
   </form>
   ```

- **Atributo enctype**: se coloca exclusivamente en la etiqueta <form> Le indica al navegador cómo debe empaquetar y formatear
  los datos del formulario antes de enviarlos a través de internet hacia el servidor

1. multipart/form-data (Obligatorio para subir Archivos)
   ```html
   <form action="/subir-perfil" method="POST" enctype="multipart/form-data">
     <input type="file" name="foto_usuario" />
     <button type="submit">Subir</button>
   </form>
   ```
2. application/x-www-form-urlencoded (El valor por defecto)
   <!-- No hace falta escribirlo, el navegador asume este comportamiento solo -->
   <form action="/login" method="POST">
       <input type="email" name="correo">
   </form>
3. text/plain (Solo para depuración / Pruebas) Envía los datos en texto plano y limpio, tal cual los escribió el usuario, línea por línea, sin ningún tipo de codificación ni símbolos raros.

- **inputmode:** de HTML5 es una forma conveniente de sugerir al navegador qué tipo de teclado debería mostrar para un campo de
  entrada

1. text: Muestra un teclado de texto general.
   ```html
   <input type="text" inputmode="text" placeholder="Texto general" />
   ```
2. decimal: Muestra un teclado de números decimales.
   ```html
   <input type="text" inputmode="decimal" placeholder="Número decimal" />
   ```
3. numeric: Muestra un teclado de números enteros.
   ```html
   <input type="text" inputmode="numeric" placeholder="Número entero" />
   ```
4. tel: Muestra un teclado de teclado para números de teléfono.
   ```html
   <input type="text" inputmode="tel" placeholder="Número de teléfono" />
   ```
5. url: Muestra un teclado de URL.
   ```html
   <input type="text" inputmode="url" placeholder="URL" />
   ```
6. email: Muestra un teclado de correo electrónico.
   ```html
   <input type="text" inputmode="email" placeholder="Correo Electrónico" />
   ```
7. search: Muestra un teclado de búsqueda, lo que a menudo es útil para aplicaciones que requieren un control adicional en el
   teclado.
   ```html
   <input type="text" inputmode="search" placeholder="Búsqueda" />
   ```

- **autocomplete**: Le dice al navegador qué tipo de dato va ahí para que sugiera rellenarlo con un solo clic usando los datos
  guardados del usuario.
  ```html
  <label for="correo">Correo Electrónico:</label>
  <input type="email" id="correo" name="correo" autocomplete="email" />
  ```
- **Autofocus**: Coloca el cursor automáticamente en ese campo de texto apenas se carga la página.
  ```html
  <input type="text" id="nombre" name="nombre" autofocus />
  ```

## Validacion de formularios
