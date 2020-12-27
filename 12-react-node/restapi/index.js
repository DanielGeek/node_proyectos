const express = require('express');
const routes = require('./routes');

// Crear el servidor
const app = express();

// Rutas de la app
app.use('/', routes());

// Puerto
app.listen(5000);