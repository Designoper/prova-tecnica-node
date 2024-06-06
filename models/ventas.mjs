import sequelize from "../db-connection.mjs";
import { DataTypes } from 'sequelize';

const Venta = sequelize.define('Venta', {
	producto: {
		type: DataTypes.STRING,
		allowNull: false
	},
	cliente: {
		type: DataTypes.STRING,
		allowNull: false
	},
	trabajador: {
		type: DataTypes.INTEGER,
		allowNull: false
	},
	fecha_venta: {
		type: DataTypes.DATE,
		allowNull: false
	},
});

export default Venta;