//File: index.js
const express = require('express');
const cors = require('cors');
const { sequelize, syncModels } = require('./models');
const userRoutes = require('./routes/user.routes');
const logRoutes = require('./routes/log.routes');
const connectMongo = require('./config/mongo');

const app = express();
const PORT = process.env.PORT || 3000;

// Middlewares
app.use(cors());
app.use(express.json());

// Rutas
app.use('/api/users', userRoutes);
app.use('/api/logs', logRoutes);

// Conectar a MySQL y MongoDB, luego iniciar el servidor
Promise.all([sequelize.authenticate(), connectMongo()])
  .then(() => {
    console.log('Conexión a MySQL exitosa');
    return syncModels();
  })
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Servidor corriendo en http://localhost:${PORT}`);
    });
  })
  .catch((error) => {
    console.error('Error al conectar a las bases de datos:', error);
  });