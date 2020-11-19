const express = require('express');
const router = express.Router();

const Task = require('../models/task');

// obtener las tareas de la bd Task en mongo
router.get('/', async (req, res) => {
    // res.send('Hola mundo');
    //busca los datos de bd Task en mongodb
    const tasks = await Task.find();
    console.log(tasks);
    res.render('index', {
        tasks
    });
});

router.post('/add', async (consulta, respuesta) => {
    const task = new Task(consulta.body);
    //guarda los datos enviados por potst en la bd de mongo llamada task
    await task.save();
    // respuesta.send('post enviado');
    respuesta.redirect('/');
    // console.log(new Task(consulta.body));
    // console.log(consulta.body);
});

// cambiar estatus
router.get('/estatus/:id', async (req, res) => {
    const { id } = req.params;
    const task = await Task.findById(id);
    task.status = !task.status;
    await task.save();
    res.redirect('/');
    // console.log(task);
    // res.send('Obtenido');
});

// obtiene datos para editar
router.get('/edit/:id', async (req, res) => {
    const { id } = req.params;
    const task = await Task.findById(id);
    res.render('edit', {
        task
    });
});

// edita
router.post('/edit/:id', async (req, res) => {
    const { id } = req.params;
    await Task.updateOne({_id: id}, req.body);
    res.redirect('/');
});

// eliminar
router.get('/delete/:id', async (respuesta, consulta) => {
    const { id } = respuesta.params;
    await Task.deleteOne({_id: id});
    consulta.redirect('/');
    // console.log(respuesta.params)
    // consulta.send('recibido');
});

module.exports = router;