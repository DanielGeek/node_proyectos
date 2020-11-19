// crear esquema de la base de datos
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

 const TaskSchema = new Schema({
    title: String,
    description: String,
    status: {
        type: Boolean,
        default: false
    }
});

// guardamos el schema en una coleccion llamada tareas y lo exportamos para usar el modulo en otros archivos
module.exports = mongoose.model('tasks', TaskSchema);