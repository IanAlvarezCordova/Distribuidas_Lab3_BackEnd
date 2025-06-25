const express = require('express');
const controller = require('../controllers/user.controller');

const router = express.Router();

//Definir las rutas para los usuarios
router.get('/', controller.getAllUsers); // Obtener todos los usuarios
router.get('/:id', controller.getUserById); // Obtener un usuario por ID
router.post('/', controller.createUser); // Crear un nuevo usuario
router.put('/:id', controller.updateUser); // Actualizar un usuario existente
router.delete('/:id', controller.deleteUser); // Eliminar un usuario

// Exportar el router para usarlo en otros archivos
module.exports = router;
