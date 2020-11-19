const bodyParser = require('body-parser');
const path = require('path');
const mongoose = require('mongoose');
const express = require('express');
const app = express();
const $ = require("jquery");

//conexion mongodb
mongoose.connect('mongodb://localhost/express-pagination', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log('bd conectada'))
.catch(err => console.log(err));

const indexRoutes = require('./routes/index');

// configuraciones
//definir puerto
app.set('port', process.env.PORT || 3000 );
app.set('views', path.join(__dirname, 'views'));
// uso de motor de plantilla
app.set('view engine', 'ejs');


// middlewares
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// rutas
app.use(indexRoutes);

// archivos estaticos
    
app.listen(app.get('port'), () => {
    console.log('server on port ', app.get('port'));
});