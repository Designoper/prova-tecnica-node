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
import getCliente from './routes/get/clientes-id.mjs';
import getEmpleados from './routes/get/empleados.mjs';
import getEmpleado from './routes/get/empleados-id.mjs';
import getProductos from './routes/get/productos.mjs';
import getProducto from './routes/get/productos-id.mjs';
import getVentas from './routes/get/ventas.mjs';
import getVenta from './routes/get/ventas-id.mjs';

// MARK: POST IMPORTS

import postClientes from './routes/post/clientes.mjs';
import postProductos from './routes/post/producto.mjs';



// Crea la tabla si no existe
sequelize.sync()
	.then(() => {
		console.log('Tabla creada');
	})
	.catch((error) => {
		console.log('Error:', error);
	});

getClientes(APP, Cliente);
getCliente(APP, Cliente);

getEmpleados(APP, Empleado);
getEmpleado(APP, Empleado);

getProductos(APP, Producto);
getProducto(APP, Producto);

getVentas(APP, Venta);
getVenta(APP, Venta);


postClientes(APP, Cliente);
postProductos(APP, Producto);

APP.listen(PORT, () => console.log(`Servidor iniciado en localhost:${PORT}`));
