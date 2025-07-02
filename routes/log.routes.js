const express = require('express');
const controller = require('../controllers/log.controller');

const router = express.Router();

// Ruta para obtener todos los logs
router.get('/', controller.getAllLogs);

module.exports = router;