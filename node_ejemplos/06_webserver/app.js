const http = require('http');

http.createServer((req, res) => {

    res.writeHead(200, { 'Content-Type': 'application/json' });

    let salida = {
        nombre: 'Daniel',
        edad: 29,
        url: req.url
    }
    // res.write('Hola mundo');
    res.end(JSON.stringify(salida));

})
.listen(8080);

console.log('Escuchando el puerto 8080');