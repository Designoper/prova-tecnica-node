import sequelize from "../db-connection.mjs";
import { DataTypes } from 'sequelize';
import Producto from "./producto.mjs";
import Cliente from "./cliente.mjs";
import Empleado from "./empleado.mjs";

const Venta = sequelize.define('Venta', {
	productoId: {
		type: DataTypes.INTEGER,
		allowNull: false,
		references: {
			model: Producto,
			key: 'id'
		},
	},
	clienteId: {
		type: DataTypes.INTEGER,
		allowNull: false,
		references: {
			model: Cliente,
			key: 'id'
		},
	},
	empleadoId: {
		type: DataTypes.INTEGER,
		allowNull: false,
		references: {
			model: Empleado,
			key: 'id'
		},
	},
}, {
	updatedAt: false,
	createdAt: 'fecha_venta',
});

Venta.belongsTo(Producto, { foreignKey: 'productoId' });
Venta.belongsTo(Cliente, { foreignKey: 'clienteId' });
Venta.belongsTo(Empleado, { foreignKey: 'empleadoId' });

export default Venta;