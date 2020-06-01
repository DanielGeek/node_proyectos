const express = require('express');
const app = express();
const bodyParser = require('body-parser');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())
 
app.get('/', function (req, res) {
    res.json('get Usuario');
});
 
app.post('/usuario', function (req, res) {

    let body = req.body;

    res.json({
        persona: body
    });
});

app.put('/usuario/:id', function (req, res) {
    let id = req.params.id;

    res.json({
        id
    });
});
 
app.delete('/delete', function (req, res) {
    res.json('delete Usuario');
});

app.listen(3000, ( )=> {
    console.log('Escuchando en el puerto: ', 3000);
});