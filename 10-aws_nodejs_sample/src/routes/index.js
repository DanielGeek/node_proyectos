const { Router } = require('express');
const router = Router();

// llamamos la funcion para obtener los datos de la tabla epicrisis_hospitalizados
const { getEpicrisisHospitalizados } = require('../controllers/index.controller');

//ruta para obtener datos de los pacientes en la tabla epicrisis_hospitalizados
router.get('/epicrisis_hospitalizados', getEpicrisisHospitalizados );
//metodo para insert
// router.post('/create_DetectEntities', createDetectEntities);


module.exports = router;