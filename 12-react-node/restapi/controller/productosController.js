const Productos = require('../models/Productos');

const multer = require('multer');
const shortid = require('shortid');
const fs = require('fs');

const configuracionMulter = {
    storage: fileStorage = multer.diskStorage({
        destination: (req, file, cb) => {
            cb(null, __dirname + '../../uploads/');
        },
        filename: (req, file, cb) => {
            const extension = file.mimetype.split('/')[1];
            cb(null, `${shortid.generate()}.${extension}`);
        }
    }),
    fileFilter(req, file, cb) {
        if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
            cb(null, true);
        } else {
            cb(new Error('Formato no válido'))
        }
    }
}

// Pasar la configiguración y el campo
const upload = multer(configuracionMulter).single('imagen');

// Sube un archivo
exports.subirArchivo = (req, res, next) => {
    upload(req, res, function (error) {
        if (error) {
            res.json({ mensaje: error })
        }
        return next();
    })
}

// Agrega nuevos productos
exports.nuevoProducto = async (req, res, next) => {
    const producto = new Productos(req.body);

    try {
        if (req.file.filename) {
            producto.imagen = req.file.filename
        }
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

// Muestra todos los productos
exports.mostrarProductos = async (req, res, next) => {
    try {
        // obtener todos los productos
        const productos = await Productos.find({});
        res.json(productos);
    } catch (error) {
        console.log(error);
        next();
    }
}

// Muestra un producto por su id
exports.mostrarProducto = async (req, res, next) => {

    const { idProducto } = req.params;
    const producto = await Productos.findById(idProducto);

    if (!producto) {
        res.json({ mensaje: 'Ese producto no existe' });
        return next();
    }

    // Mostrar el producto
    res.json(producto);
}

// Actualizar un producto por su id
exports.actualizarProducto = async (req, res, next) => {

    const { idProducto } = req.params;

    try {
        // Construir un nuevo producto
        let nuevoProducto = req.body;

        // Verificar si hay imagen nueva
        if (req.file) {
            nuevoProducto.imagen = req.file.filename;
        } else {
            let productoAnterior = await Productos.findById(idProducto);
            nuevoProducto.imagen = productoAnterior.imagen;
        }

        let producto = await Productos.findOneAndUpdate({ _id: idProducto },
            nuevoProducto, {
            new: true
        });

        res.json({
            producto,
            mensaje: 'Producto actualizado',
            status: 200
        });
    } catch (error) {
        console.log(error);
        next();
    }
}

// Elimina un producto via ID
exports.eliminarProducto = async (req, res, next) => {
    const { idProducto } = req.params;
    try {
        // buscar la ruta de la imagen a eliminar
        const producto = await Productos.findById({ _id: idProducto });
        console.log(producto.imagen);
        // if existe la imagen la eliminamos
        if (producto.imagen) {
            fs.unlink(__dirname + '../../uploads/' + producto.imagen, function (err) {
                if (err) throw err;
                console.log('File deleted');
            });
        }

        await Productos.findByIdAndDelete({ _id: idProducto });

        res.json({ mensaje: 'El producto se ha eliminado' });
    } catch (error) {
        console.log(error);
        next();
    }
}