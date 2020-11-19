const path = require('path');
const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');

const app = express();

// opciones para la coneccion con mongodb
const opciones = {
    useNewUrlParser: true,
    useUnifiedTopology: true 
}

// conexion a la bd llamada crud-mongo
mongoose.connect('mongodb://localhost/crud-mongo', opciones)
    .then(db => console.log('Db connected'))
    .catch(err => console.log(err));

// importar rutas
const indexRoutes = require('./routes/index');

// configuraciones
app.set('port', process.env.PORT || 4000);
// ruta de vista 
app.set('views', path.join(__dirname, 'views'));
// motor de plantillas ejs
app.set('view engine', 'ejs');

// middlewares (metodos que se ejecutan antes de llegar a las rutas ej: dar permisos, etc. procesar datos, )
// info sobre lo que procesa el servidor
app.use(morgan('dev'));
// procesar datos de formularios, sin imgs
app.use(express.urlencoded({extended: false}));

// rutas
// ruta inicial
app.use('/', indexRoutes);

app.listen(app.get('port'), () => {
    console.log(`Servidor en el puerto ${app.get('port')}`);
})