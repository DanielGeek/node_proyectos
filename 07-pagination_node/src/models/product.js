const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//creamos el esquema de la bd
const ProductSchema = new Schema({
    category: String,
    name: String,
    price: Number,
    cover: String
});

// exportamos el modelo
module.exports = mongoose.model('Product', ProductSchema);