import sequelize from "../db-connection.mjs";
import { DataTypes } from 'sequelize';
import Empleado from "./empleados.mjs";

const Venta = sequelize.define('Venta', {
	producto: {
		type: DataTypes.STRING,
		allowNull: false
	},
	cliente: {
		type: DataTypes.STRING,
		allowNull: false
	},
	empleado: {
		type: DataTypes.INTEGER,
		allowNull: false
	}
}, {
	updatedAt: false,
	createdAt: 'fecha_venta',
});

export default Venta;