import sequelize from './db-connection.mjs';
import express from 'express';
import Producto from './models/productos.mjs';
import Cliente from './models/clientes.mjs';

const APP = express();

// Crea la tabla si no existe
sequelize.sync()
	.then(() => {
		console.log('Tabla creada');
	})
	.catch((error) => {
		console.log('Error:', error);
	});


APP.get('/clientes', async (_req, res) => {
	try {
		const CLIENTES = await Cliente.findAll({});
		return res.json({ CLIENTES });
	}
	catch (error) {
		console.log('Error', error);
		return res.status(500).json({ message: 'Internal server error' });
	}
});

// Ruta para crear un usuario
APP.post('/clientes/nuevo', async (req, res) => {
	try {
		const { nombre, direccion, telefono } = req.body;

		const CLIENT = await Cliente.create({ nombre, direccion, telefono });

		res.json(CLIENT);
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
});

const PORT = 3000;
APP.listen(PORT, () => console.log(`Servidor iniciado en localhost:${PORT}`));
