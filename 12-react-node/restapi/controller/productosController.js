const Productos = require('../models/Productos');

// Agrega nuevos productos
exports.nuevoProducto = async (req, res, next) => {
    const producto = new Productos(req.body);
    try {
        await producto.save();
        res.json({
            mensaje: 'Se agrego un nuevo producto',
            status: 200
        });
    } catch (error) {
        console.log(error);
        next();
    }
}