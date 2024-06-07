import assert from 'node:assert';
import { test, describe } from 'node:test';
import request from 'supertest';
import getClientes from './routes/get/clientes.mjs';
import APP from './express.mjs';
import { get } from 'node:http';
import Cliente from './models/cliente.mjs';
import getProductos from './routes/get/productos.mjs';
import getCliente from './routes/get/clientes-id.mjs';



// describe(`description`, () => {
// 	// test(`description`, () => {
// 	// 	assert.throws(() => thisWillThrow, {
// 	// 		name: 'Error',
// 	// 		message: 'errorMessage'
// 	// 	});
// 	// 	assert.strictEqual()

// 	// });

// 	test('should get all tasks', async() => {
// 		const res = await request(getProductos(APP)).get('/productos');
// 		assert.strictEqual(res.statusCode,200);
// 		// const res = getClientes(APP, Cliente);
// 		// assert.strictEqual(res.statusCode,200);
// 		// getClientes(APP, Cliente)
// 		// expect(res.statusCode).toEqual(200);
// 		// expect(res.body).toBeInstanceOf(Array);
// 	});

// });

// function testGetCliente() {
//     const mockApp = {
//         get: (ruta, callback) => {
//             // Simula una solicitud HTTP
//             const req = { params: { id: 1 } };
//             const res = {
//                 json: (data) => {
//                     assert.deepStrictEqual(data, { CLIENTE: { id: 1, nombre: 'Nombre del cliente' } });
//                 },
//             };
//             callback(req, res);
//         },
//     };

//     // Ejecuta la función de prueba
//     getCliente(mockApp, { findOne: () => ({ id: 1, nombre: 'Nombre del cliente' }) });
// }

// // Ejecuta la prueba
// testGetCliente();
