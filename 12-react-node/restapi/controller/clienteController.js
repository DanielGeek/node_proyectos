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

// Muestra todos los clientes
exports.mostrarClientes = async (req, res, next) => {
    try {
        const clientes = await Clientes.find({});
        res.json(clientes);
    } catch (error) {
        console.log(error);
        next();
    }
}

// Muestra un cliente por su ID
exports.mostrarCliente = async (req, res, next) => {
    const { idCliente } = req.params;

    try {
        const cliente = await Clientes.findById(idCliente);

        if (!cliente) {
            res.json({ mensaje: 'Ese cliente no existe' });
            next();
        }
        // Mostrar el cliente
        res.json(cliente);
    } catch (error) {
        console.log(error);
        res.json({ mensaje: error });
        next();
    }
}