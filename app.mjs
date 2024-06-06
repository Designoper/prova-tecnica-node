import sequelize from './db-connection.mjs';
import express from 'express';

const APP = express();
APP.use(express.json());
const PORT = 3000;

// APP.use((_req, res, next) => {
//     res.setHeader('Content-Type', 'application/json');
//     next();
// });

// MARK: MODEL IMPORTS

import Cliente from './models/clientes.mjs';
import Empleado from './models/empleados.mjs';
import Producto from './models/productos.mjs';
import Venta from './models/ventas.mjs';

// MARK: GET IMPORTS

import getClientes from './routes/get/clientes.mjs';
import getClientesId from './routes/get/clientes-id.mjs';
import getEmpleados from './routes/get/empleados.mjs';
import getEmpleadosId from './routes/get/empleados-id.mjs';
import getProductos from './routes/get/productos.mjs';
import getProductosId from './routes/get/productos-id.mjs';
import getVentas from './routes/get/ventas.mjs';
import getVentasId from './routes/get/ventas-id.mjs';




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
getEmpleadosId(APP, Empleado);

getProductos(APP, Producto);
getProductosId(APP, Producto);

getVentas(APP, Venta);
getVentasId(APP, Venta);


// APP.post('/clientes/nuevo', async (req, res) => {
// 	try {
// 		const nombre = req.params.nombre;
// 		const direccion = req.params.direccion;
// 		const telefono = req.params.telefono;

// 		const CLIENT = ({ nombre: nombre, direccion: direccion, telefono: telefono });
// 		await Cliente.create(CLIENT);

// 		res.json(nombre);
// 	} catch (error) {
// 		res.status(500).json({ error: error.message });
// 	}
// });



APP.post('/clientes/nuevo', async (req, res) => {
	const NOMBRE = req.body.nombre; // Obtén los datos del cuerpo de la solicitud
	const DIRECCION = req.body.direccion; // Obtén los datos del cuerpo de la solicitud
	const TELEFONO = req.body.telefono; // Obtén los datos del cuerpo de la solicitud

	try {
		const newCliente = await Cliente.create({ nombre: NOMBRE, direccion: DIRECCION, telefono: TELEFONO }); // Crea un nuevo cliente en la base de datos
		res.status(201).json(newCliente); // Devuelve el cliente creado
	} catch (error) {
		console.error('Error al crear el cliente:', error);
		res.status(500).json({ error: 'Error interno del servidor' });
	}
});


// APP.post('/clientes/nuevo', async (req, res) => {
// 	try {
// 	  const { nombre, direccion, telefono } = req.body; // Utiliza req.body en lugar de req.params

// 	  // Crea un nuevo cliente en la base de datos
// 	  const newClient = await Cliente.create({
// 		nombre,
// 		direccion,
// 		telefono
// 	  });

// 	  res.status(201).json(newClient); // Devuelve el cliente creado
// 	} catch (error) {
// 	  console.error('Error al crear el cliente:', error);
// 	  res.status(500).json({ error: 'Error interno del servidor' });
// 	}
//   });


APP.listen(PORT, () => console.log(`Servidor iniciado en localhost:${PORT}`));
