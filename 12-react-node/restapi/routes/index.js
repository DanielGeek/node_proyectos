const express = require('express');
const router = express.Router();

const clienteController = require('../controller/clienteController');

const productosController = require('../controller/productosController');

const pedidosController = require('../controller/pedidosController');

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

    // Eliminar productos
    router.delete('/productos/:idProducto', productosController.eliminarProducto);

    /** PEDIDOS **/
    // Agregar nuevos pedidos
    router.post('/pedidos', pedidosController.nuevoPedido);

    // Mostrar todos los pedidos
    router.get('/pedidos', pedidosController.mostrarPedidos);

    // Mostrar un pedido por su id
    router.get('/pedidos/:idPedido', pedidosController.mostrarPedido);

    return router;
}