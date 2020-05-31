const express = require('express');
const app = express();

app.use(express.static(__dirname + '/public'));
 
// express hbs engine
app.set('view engine', 'hbs');

app.get('/', (req, res) => {
    
    res.render('home', {
        nombre: 'Daniel',
        anio: new Date().getFullYear()
    });
});
 
app.listen(3000, () => {
    console.log('Escuchando peticiones en el puerto 3000');
});