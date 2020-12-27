const express = require('express');
const routes = require('./routes');
const mongoose = require('/mongoose');

// Conectar mongo
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/restapis', {
    useNewUrlParser: true
});

// Crear el servidor
const app = express();

// Rutas de la app
app.use('/', routes());

// Puerto
app.listen(5000);