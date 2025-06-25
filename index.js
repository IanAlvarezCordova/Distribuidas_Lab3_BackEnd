const {sequelize} = require('./models');
const cors = require('cors');
const express = require('express');

require('dotenv').config();

const userRoutes = require('./routes/user.routes');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use('/api/users', userRoutes);

sequelize.sync().
then(() => {
  console.log('Conectado a MySQL.');
    app.listen(PORT, () => {
        console.log(`Servidor escuchando en http://localhost:${PORT}`);
    });
}).catch((error) => {
  console.error('Error de conexión:', error);
});
