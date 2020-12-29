const Pedidos = require('../models/Pedidos');

exports.nuevoPedido = async (req, res, next) => {
    const pedido = new Pedidos(req.body);
    try {
        await pedido.save();
        res.json({ mensaje: 'Se agregó un nuevo pedido' });
    } catch (error) {
        console.log(error);
        next();
    }
}

// Muestra todos los pedidos
exports.mostrarPedidos = async (req, res, next) => {
    try {
        const pedidos = await Pedidos.find({}).populate('cliente').populate({
            path: 'pedido.producto',
            model: 'Productos'
        });

        res.json(pedidos);
    } catch (error) {
        console.log(error);
        next();
    }
}

// Muestra un pedido por su ID
exports.mostrarPedido = async (req, res, next) => {
    const { idPedido } = req.params;

    const pedido = await Pedidos.findById(idPedido).populate('cliente').populate({
        path: 'pedido.producto',
        model: 'Productos'
    });

    if (!pedido) {
        res.json({ mensaje: 'Ese pedido no existe' });
        return next();
    }

    // mostrar el pedido
    res.json(pedido);
}