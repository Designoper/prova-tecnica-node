import APP from './express.mjs';

// MARK: MODEL IMPORTS
import Cliente from './models/cliente.mjs';
import Empleado from './models/empleado.mjs';
import Producto from './models/producto.mjs';
import Venta from './models/venta.mjs';

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
import postCliente from './routes/post/cliente.mjs';
import postProducto from './routes/post/producto.mjs';

// MARK: PATCH IMPORTS
import patchCliente from './routes/patch/cliente.mjs';
import patchVenta from './routes/patch/venta.mjs';

// MARK: PUT IMPORTS
import putProducto from './routes/put/producto.mjs';


getClientes(APP, Cliente);
getCliente(APP, Cliente);

getEmpleados(APP, Empleado);
getEmpleado(APP, Empleado);

getProductos(APP, Producto);
getProducto(APP, Producto);

getVentas(APP, Venta);
getVenta(APP, Venta);

postCliente(APP, Cliente);
postProducto(APP, Producto);

patchCliente(APP, Cliente);
patchVenta(APP, Venta);

putProducto(APP, Producto);

const PORT = 3000;

APP.listen(PORT, () => console.log(`App escuchando en localhost:${PORT}`));
