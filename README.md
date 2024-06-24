# ListaMaestra

En esta app [ListaMaestra](https://listamaestra.netlify.app) se pueden ingresar tareas a realizar para organizar mejor el día a día. Estas pueden ser editadas, eliminadas y marcadas cuando se complete la tarea. También posee filtros según tarea realizada, no realizada y todas las tareas.

## La vista segun el tamaño:

Modo celular:

![vista desde celular](./src/assets/tp1.PNG)

Modo desktop:

![vista desde desktop](./src/assets/tp2.PNG)

## El navbar:

Está compuesto por el logo de la app, el nombre de esta y un botón con el cual se puede cambiar el color del fondo de la app.

![vista de navbar](./src/assets/tp4.PNG)

## Agregar nueva tarea:

La app posee un botón (agregar nueva tarea) el cual al ser tocado se abre una modal para agregar una nueva tarea, con el nombre de la tarea y una descripción (esta última opcional).

![vista de agregar Nueva Tarea](./src/assets/tp3.PNG)

## Card de tarea:

La card de la tarea al ser creada tendrá lo siguiente:

- Nombre
- Icono de Check
- Icono de eliminar
- Icono de editar
- Descripción de tarea para abrir y ver la descripcón que le colocamos.

![vista de card de tarea](./src/assets/tp5.PNG)

### Icono check:

Al tocar este icono tanto el nombre de la tarea como el icono cambiarán de color a gris dando a entender que la tarea está completada.

- Tarea no completada
  ![tarea no completada](./src/assets/tp6.PNG)

- Tarea completada
  ![tarea  completada](./src/assets/tp7.PNG)

## Icono de eliminar:

Al tocar el icono de eliminar se abrirá un modal que preguntará al usuario si está seguro de eliminar la tarea: Nombre de la tarea. Al tocar eliminar se borrará la card de esa tarea.
También la modal tiene el botón de cancelar por si el usuario no deseaba abrir o eliminar esa tarea.

![vista de Eliminar Tarea](./src/assets/tp8.PNG)

## Icono de editar:

Al tocar el icono de editar se abrirá una modal con los datos de la card precargados para ser editados si se desea.Al tocar el botón Guardar los cambios realizados se guardan y se ven reflejados en la card de la tarea.También posee el botón de cancelar por si el usuario no deseaba editar esa card.

![vista de Editar Tarea](./src/assets/tp9.PNG)

## Filtros:

La app puede filtrar las tareas según las tareas Realizadas, No Realizadas y Todas las tareas. Esto ayuda al usuario para tener en cuenta las tareas que le faltas terminar o cuáles son las que ya terminó.

## Construido Con

Las tecnologías que utilicé para construir este proyecto:

- JavaScript
- React
- Material-UI (MUI)

## Autor

- ** MELIE GALAZ **

## Link para usar la app

https://listamaestra.netlify.app
