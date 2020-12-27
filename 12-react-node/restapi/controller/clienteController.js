const Clientes = require('../models/Clientes');

// Agrega un nuevo cliente
exports.nuevoCliente = async (req, res, next) => {
    const cliente = new Clientes(req.body);

    try {
        // almacenar el registro
        await cliente.save();
        res.json({
            mensaje: 'Se agrego un nuevo cliente',
            status: 200
        });
    } catch (error) {
        // Si hay un error, console.log y next
        console.log(error);
        next();
    }
}