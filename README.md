# Prueba de nivel Node.js

## Software

Este proyecto ha sizo realizado en node.js v20.14 (LTS). Las dependencias se pueden consultar en package.json. Las pruebas de los enpoints se han realizado con la extensión Thunder Client de VSCode.

## Estructura

En la raiz se encuentra:

-app.mjs, que continene todas las importaciones para que el proyecto funcione.
-db-connection.mjs, que establece la conexión a la base de datos utilizando Sequelize.
-express.mjs, que configura el framework Express para ser importado.

La carpeta models contiene los archivos que definen el contenido de las tablas de la base de datos.

La carpeta routes se subdivide en los metodos CRUD utilizados (GET, PATCH, POST, PUT), y cada uno de los archivos de las subcarpetas contiene una función para realizar la operación correspondiente utilizando un modelo y un endpoint concreto.

## Arranque

Para iniciar la aplicación, tener una base de datos llamada tienda_informatica activa en localhost (para el desarrollo se ha utilizado XAMPP) y escribir `npm start` en la terminal.