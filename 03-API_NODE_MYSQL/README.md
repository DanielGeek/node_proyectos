Pasos para levantar el proyecto de API con node, express y mysql.<br/>
1 - Clonar el repositorio<br/>
2 - entrar al repositorio y descargar librerias de node con el comando `npm i`<br/>
4 - crear y importar la bd de la carpeta bd/database.sql a mysql llamada `company` usuario `root` password(vacio) y el procedimiento para poder insertar procedures.sql o importamos directamente la bd llamada `company.sql`<br/>
5 - levantar el proyecto `node src/index.js` otra opcion es bajar nodemon y ejecutar el comando npm install nodemon -D  y correr con `npm run dev`<br/>
6 - listas todos los registros vamos a la ruta `localhost:3000`<br/>
7 - listar un registro por id `localhost:3000/1`, `localhost:3000/2` o `localhost:3000/3`<br/>
8 - para insertar datos usamos una app llamada Postman o similar para hacer solicitudes http<br/>
9 - colocamos en la consulta la url `localhost:3000` y el metodo sera Post para insertar en el header colocamos `Content-Type`
 `application/json`<br/>
10 - en el body seleccionamos raw y pasamos el json de datos a insertar por ejemplo `{
	"id": 0,
	"name": "Test",
	"salary": 700000
}`<br/>
11 - Para actualizar seleccionar el metodo PUT y colocamos la url + el id del empleado a actualizar `localhost:3000/3` y pasamos en el raw json el objeto con los nuevos datos `{
	"name": "Juan",
	"salary": 800000
}`
<br/>
12 - Eliminar un registro por id `localhost:3000/1`, `localhost:3000/2` o `localhost:3000/3`<br/> y usamos el metodo DELETE en Postman
<br/><br/>
con esto hemos creado una API usando Node.js, Express.js y MySql