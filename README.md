Guía de instalación:

1) Tener instalado el Xampp.

2) Instalar el CLI de Ionic (npm install -g @ionic/cli)

3) Descargar e instalar composer (https://getcomposer.org/download/). Es un instalador según cada equipo, luego es todo "siguiente".

4) Clonar el repositorio y colocarlo en la carpeta "xampp\htdocs". ( git clone https://github.com/matias2301/Tienda-Ionic-Laravel.git ).

5) Dentro de la carpeta frontend del proyecto correr "npm install".

6) Dentro de la carpeta backend del proyecto ejecutar “composer install”.

6) Dentro de la carpeta backend del proyecto ejecutar “npm install”.

7) Copiar el archivo .env.example y renombrarlo sólo como .env y dejarlo en la misma ubicación ( en el raíz de la carpeta backend ).

8) En la carpeta backend, en una consola correr “php artisan key:generate”.

9) Crear una base de datos ( por ejemplo Mysql ).

10) Modificar el archivo .env según la base de datos creada.
Ejemplo de cómo quedaría el archivo .env con la configuración de la base de datos:
  DB_CONNECTION=mysql
  DB_HOST=127.0.0.1
  DB_PORT=3306
  DB_DATABASE=nombreDeLaBD
  DB_USERNAME=username
  DB_PASSWORD=password

11) En una consola sobre la carpeta backend correr “php artisan migrate” y luego “php artisan db:seed”.
Esto último crea un usuario para poder loguearse con email "admin@admin.com" y contraseña "1234". Este usuario tiene role "admin" para poder administrar los productos (aunque esta parte todavía no está implementada).

12) Dentro mismo de la carpeta backend ejecutar “php artisan passport:install”.

13) En la carpeta backend ejecutar, en una consola "php artisan serve".

14) En otra consola, en la carpeta frontend, ejecutar "ionic serve -o". Esto abrirá el proyecto en el navegador en localhost:8100 (generalmente).

15) Si se quiere correr el lado del frontend en la funcionalidad de server side rendering utilizando la librería de Angular Universal, en lugar del punto 14) correr el siguiente comando: "npm run dev:ssr".
Esta última forma puede generar algún error en la consola que aun requiere ser solucionado.
