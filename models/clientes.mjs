import sequelize from "../db-connection.mjs";
import { DataTypes } from 'sequelize';

const Cliente = sequelize.define('Cliente', {
	nombre: {
		type: DataTypes.STRING,
		allowNull: false
	},
	direccion: {
		type: DataTypes.STRING,
		allowNull: false
	},
	telefono: {
		type: DataTypes.STRING,
		allowNull: false
	}
}, {
	timestamps: false,
});

export default Cliente;