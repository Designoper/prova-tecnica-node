import connection from "../db-connection.mjs";
import { DataTypes } from 'sequelize';

const Empleado = connection.define('Empleado', {
	nombre: {
		type: DataTypes.STRING,
		allowNull: false
	},
}, {
	timestamps: false,
});

export default Empleado;