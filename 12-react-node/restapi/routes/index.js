const express = require('express');
const router = express.Router();

const clienteController = require('../controller/clienteController');

const productosController = require('../controller/productosController');

module.exports = function () {

    // Agregar nuevos clientes via POST
    router.post('/clientes', clienteController.nuevoCliente);

    // Obtener todos los clientes
    router.get('/clientes', clienteController.mostrarClientes);

    // Muestra un cliente en especifico (ID)
    router.get('/clientes/:idCliente', clienteController.mostrarCliente);

    // Actualizar Cliente
    router.put('/clientes/:idCliente', clienteController.actualizarCliente);

    // Eliminar Cliente
    router.delete('/clientes/:idCliente', clienteController.eliminarCliente);

    /** PRODUCTOS */
    // nuevos productos
    router.post('/productos',
        productosController.subirArchivo,
        productosController.nuevoProducto
    );

    // Muestra todos los productos
    router.get('/productos', productosController.mostrarProductos);

    // Muestra un producto por su id
    router.get('/productos/:idProducto', productosController.mostrarProducto);

    // Actualizar productos
    router.put('/productos/:idProducto',
        productosController.subirArchivo,
        productosController.actualizarProducto
    );

    return router;
}