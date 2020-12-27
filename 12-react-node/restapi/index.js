const express = require('express');
const routes = require('./routes');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

// Conectar mongo
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/restapis', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
});

// Crear el servidor
const app = express();

// habilitar bodyparser para poder leer los datos enviados
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Rutas de la app
app.use('/', routes());

// Puerto
app.listen(5000);