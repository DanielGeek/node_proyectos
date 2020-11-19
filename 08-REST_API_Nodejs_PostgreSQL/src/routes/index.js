const { Router } = require('express');
const router = Router();
// integro las funciones para el crud de la tabla
const { getUsers, createUser, getUserById, updateUser, deleteUser } = require('../controllers/index.controller')

router.get('/users', getUsers);
router.get('/users/:id', getUserById);
router.post('/users', createUser);
router.put('/users/:id', updateUser);
router.delete('/users/:id', deleteUser);


module.exports = router;