import sequelize from './db-connection.mjs';
import express from 'express';

import Producto from './models/productos.mjs';
import Cliente from './models/clientes.mjs';
import Empleado from './models/empleados.mjs';


// MARK: GET IMPORTS

import getClientes from './routes/get/clientes.mjs';
import getClientesId from './routes/get/clientes-id.mjs';
import getEmpleados from './routes/get/empleados.mjs';

const APP = express();
const PORT = 3000;

// Crea la tabla si no existe
sequelize.sync()
	.then(() => {
		console.log('Tabla creada');
	})
	.catch((error) => {
		console.log('Error:', error);
	});

getClientes(APP, Cliente);
getClientesId(APP, Cliente);
getEmpleados(APP, Empleado);

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


APP.listen(PORT, () => console.log(`Servidor iniciado en localhost:${PORT}`));
