# AlcanceTest

Link github `https://github.com/pablogv56/AlcanceTest`, favor clonar el proyecto. Desarrollado en el IDE Visual Studio Code.

## Primer inicio

Para iniciar el proyecto utilizar el comando `ng serve` (Favor dirigirse a la carpeta clonada para ejecutarlo). Ir al link `http://localhost:4200/`. (solo funcionara el SPA de Angular ya que la configuracion de la BD va independiente)

## Base de datos

La aplicacion esta desarrollada en Angular v.14.1.2, utilizando XAMPP con el servidor apache y base de datos MySQL.
en la carpeta XAMPP se encuentra las siguientes carpetas:
MySql : Script de la base de datos llamado script.sql
petitions: se encuentra el archivo php llamado index.php para realizar la conexion a la bd y poder recibir las peticiones a la API externa de la aplicacion en angular, se recomienda cambiar usuario y contraseña del usuario utilizado en la base de datos MySQl.

## Recomendaciones

Si se desea ejecutar el proyecto completo, se recomienda crear una carpeta en archivo de instalacion XAMPP en htdocs/petitions pegar el archivo index.php, cambiar usuario y contraseña en archivo php para el ingreso de la base de datos y ejecutar el script en la base de datos de MySQL nombrada 'api'.