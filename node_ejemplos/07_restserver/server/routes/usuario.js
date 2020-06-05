
const express = require('express');

const app = express();


app.get('/', function (req, res) {
    res.json('get Usuario');
});
 
app.post('/usuario', function (req, res) {

    let body = req.body;
    if( body.nombre === undefined ) {
        res.status(400).json({
            ok: false,
            mensaje: 'El nombre es necesario'
        })
    } else {
        
        res.json({
            persona: body
        });
    }

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

module.exports = app;