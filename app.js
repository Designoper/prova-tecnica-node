const express = require('express');
const { DataTypes } = require('sequelize');
const sequelize = require('./db-connection.js');

const app = express();

// Define un modelo
const User = sequelize.define('User', {
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  age: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
});

// Crea la tabla si no existe
sequelize.sync()
  .then(() => {
    console.log('Tabla creada');
  })
  .catch((error) => {
    console.log('Error:', error);
  });

// Ruta para crear un usuario
app.post('/users', async (_req, res) => {
  try {
    const { name, age } = _req.body;

    // Crea un usuario en la base de datos
    const user = await User.create({ name, age });

    res.json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Inicia el servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor iniciado en el puerto ${PORT}`);
});
