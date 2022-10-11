# Curso de React en Coderhouse
## Descripción
Esto es un ecommerce desarrollado en React como SPA.
Para el backend se utilizara FireBase.

## Librerias
- React Bootstrap 
  - Framework de CSS.
  - En un futuro me gustaria implementar MUI.
- React Bootstrap Router
  - Se utilizo esta libreria para no perder los estilos a la hora de usar react-router-dom.
- React Icons
  - Libreria de iconos.
- Sass
  - Para poder utilizar SCSS en el proyecto.
- React Hook Form
  - Es una libreria para manejar la validacion de los formularios. Considero que agrega valor al proyecto ya que tiene muchas funcionalidades. Por ejemplo evita los rerenders de los inputs del formulario, agrega validaciones mediante la API o validaciones custom, y eso lo considero la verdad que muy bueno. Ademas, pensando en si el proyecto escala, ya la tengo instalada y lista para usarse.
- Firebase
  - Para simular un backend.
  - Se guarda informacion de los productos y ordenes.

## Extras
- En el carrito hay controles para subir y bajar la cantidad. No te va a dejar agregar mas productos de los que estan en el stock. Tambien si tiene 1 producto y tocas "-" te lo borra. Este ultimo punto puede ser 1 poco discutido desde el lado de UX, pero lo agregue igual para practicar esa funcionalidad en el componente.
- Se pueden buscar los productos en el sitio. Si estas en el home, va a buscar dentro de todos los productos que haya. Si estas dentro de una categoria te va a buscar dentro de esta categoria. Y si entras a una categoria que no hay nada, como por ejemplo promociones, no te va a mostrar nada y te va a mostrar un mensaje.
  
## Comentarios
Este es mi primer proyecto con React, si bien me vi muchos cursos en YouTube.
Espero poder aplicar todo el conocimiento que se vea en el curso, y poder agregar algunas cosas por mi cuenta.
En el futuro me gustaria implementar Redux para manejar el estado de la aplicacion.
Si la aplicacion crece, me gustaria usar useReducer para manejar el estado.
No me gusto tanto trabajar con Bootstrap. Creo que la proxima vez utilizaria Tailwind CSS, o alguna libreria de componetes como MUI.
En Netlify va a tirar un error si se quiere acceder desde una ruta que no sea el home. Esto es porque me falto agregar 1 archivo en la carpeta publica del proyecto.

## Link
  - [Ecommerce con React](https://react-ecommerce-cristian-coppari.netlify.app/)

Hecho con ❤️ por Cristian Coppari
