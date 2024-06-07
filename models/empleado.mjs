import sequelize from "../db-connection.mjs";
import { DataTypes } from 'sequelize';

const Empleado = sequelize.define('Empleado', {
	nombre: {
		type: DataTypes.STRING,
		allowNull: false
	},
	password: {
		type: DataTypes.STRING,
		// set(value) {
		// 	this.setDataValue('password', hash(value));
		// },
		allowNull: false
	},
}, {
	timestamps: false,
});

export default Empleado;