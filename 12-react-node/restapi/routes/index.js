const express = require('express');
const router = express.Router();

const clienteController = require('../controller/clienteController');

module.exports = function () {

    // Agregar nuevos clientes via POST
    router.post('/clientes', clienteController.nuevoCliente);

    // Obtener todos los clientes
    router.get('/clientes', clienteController.mostrarClientes);

    return router;
}