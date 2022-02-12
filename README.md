# IT_Globers Challenge

## Template
Se ejecutó el comando `npx create-react-app` para crear la base de la aplicación siguiendo los parámetros de React, se agregó template `pwa`para poder migrar fácilmente la app a una Progressive Web App(PWA).

## primeros pasos
Para correr el proyecto primero se debe ejecutar el comando `npm install` para instalar todas las dependencias necesarias, segundo se debe ejecutar el comando `npm start`para lanzar la aplicación en el localhost.

## ¿De qué va la aplicación?
Es un sitio web par a demo para hacer dejar datos de contacto a una aerolinea para recibir información de precios, ofertas, y demás; puedes dejarle el contacto a cuatro aerolíneas, las cuales puedes seleccionar en unas tarjetas que aparecen la pagina principal o clickeando en la barra de navegación; estos datos se guardan relacionaos con la aerolínea en la que llenes el formulario. 

## ¿Cómo se hizo?
### librerías
las librerías usadas fueron `react` como principal, `react-router-dom` para manejar el ruteado, `react-bootstrap`como principal para los esstilos, `sass` como preprocesador de estilos `sweetalert2`para las alertas, y se uso el `template pwa`.


### distintas vistas
Se utiliza `react-router-dom v6`para navegar entre rutas; la ruta home o principal, una ruta dinámica para cada aerolínea, en todas tenemos la nav para permitirnos navegar en el sitio; y una ruta notFound por si el cliente intenta buscar una ruta que no existe.
Se implementaron para los estilos, `react-bootstrap` y `sass`; los datos que se usan de las aerolíneas se crearon en una carpeta `datos`y se hace el uso de estos tipo JSON en los componentes `NavBar` para mostrar los nombres, y `Home`, para alimentar las cards.

### Responsive
La aplicación es responsive; esto se aplica a través de sass usando un `mixin` que verifica el tamaño de la pantalla para luego aplicar una media para dispositivos con pantalla menor a `920px`; En el componente se hace el uso del `eventListener` de javascript para evidenciar si se cambió la pantalla, se usa un `useEffect` para react lo identifique y se re-renderize si hay cambios; de esta forma podemos manejar una variable que tomará los valores del `window.width` y `window.height` para adaptar los estilos y usar la propiedad `isMenu` que oculta el menu solo cuando el ancho del dispositivo sea menor de `920px`; en otro `useEffect` verificamos si este tamaño es igual o menor y cambiamos a true el valor de la variable `menuOpen` para aplicar la propiedad `isMenu` esta propiedad oculta el menú con un traslate; luego usando `react/icons` usamos dos componentes dentro de un div: `BiMenuAltRight` que muestra un boton con un icono de menu, y `AiOutlineClose` que oculta el sidebar; adicional se aplica un display none para que se reacomoden en el espacio los items. Por último pr alas cards se utilizó `react-bootstrap` que ya viene responsive; y para las alertas `sweetalert2` que es adecuada para cualquie tamaño de dispositivo.

