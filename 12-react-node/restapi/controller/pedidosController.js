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

// Actualizar el pedido por su ID
exports.actualizarPedido = async (req, res, next) => {
    const { idPedido } = req.params;

    try {
        let pedido = await Pedidos.findOneAndUpdate({ _id: idPedido }, req.body, { new: true }).populate('cliente').populate({
            path: 'pedido.producto',
            model: 'Productos'
        });

        res.json(pedido);

    } catch (error) {
        console.log(error);
        next();
    }
}

// Eliminar un pedido por su id
exports.eliminarPedido = async (req, res, next) => {
    const { idPedido } = req.params;
    try {
        await Pedidos.findOneAndDelete({ _id: idPedido });
        res.json({ mensaje: 'El pedido se ha eliminado' });
    } catch (error) {
        console.log(error);
        next();
    }
}