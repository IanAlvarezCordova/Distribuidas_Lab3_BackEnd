const Log = require('../models/log');

// Obtener todos los logs
exports.getAllLogs = async (req, res) => {
  try {
    const logs = await Log.find().sort({ timestamp: -1 }); // Ordenar por fecha descendente
    res.status(200).json(logs);
  } catch (error) {
    console.error('Error al obtener los logs:', error);
    res.status(500).json({ message: 'Error interno del servidor' });
  }
};