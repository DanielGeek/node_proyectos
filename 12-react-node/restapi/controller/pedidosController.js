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