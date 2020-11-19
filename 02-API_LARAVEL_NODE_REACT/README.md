# API_LARAVEL_NODE_REACT
* Proyecto cosumiendo API local creada con laravel y obtener sus datos mediante reac, base de datos MySql

* la carpeta cliente_api_notas, sera nuestro cliente que consume la API funciona como el cliente creado con react.js
entramos a ella y ejecutamos npm start
y les dara la url para mostrar las notas de la api local
http://localhost:3000/

* la carpeta api_react esta creada con laravel 6.x, este sera nuestro servidor API
la base de datos esta guardada en la carpeta api_react/database/api_notas.sql
entramos a ella y ejecutamos desde términal php artisan serve, la url para ver los datos de notas esta en 
Laravel development server started: http://127.0.0.1:8000
si pones la ruta http://127.0.0.1:8000/notas_notas mostrara un bojeto con los datos en formato json de las notas obtenidas desde la base de datos
Nota: la bd esta en MySql, los datos de conexión lo pueden encontrar en el archivo 
api_react\.env
Si quieren ver solo los datos en json levantando laravel
ir a la carpeta api_react y ejecutar desde terminal con laragon el comando
php artisan serve, esto levanta el servidor con la url
http://127.0.0.1:8000 al colocar http://127.0.0.1:8000/notas deberia de mostrar la info de la tabla notas
de la base de datos llamada api_notas

cliente_api_notas consume con axios desde http://localhost:3000/ los datos json del end-point en api_react 
http://127.0.0.1:8000/notas_notas

Es un proyecto basico para obtener datos usando laravel, mysql, react y otras librerias que encontraran en el packet.json

Nota: en el archivo API notas laravel con react (1).docx doy una explicación más detalla de compo usar laravel y react y adjunto unos links de guía

Saludos