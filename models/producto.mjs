import connection from "../db-connection.mjs";
import { DataTypes } from 'sequelize';

const Producto = connection.define('Producto', {
	nombre: {
		type: DataTypes.STRING,
		allowNull: false
	},
	precio: {
		type: DataTypes.INTEGER,
		allowNull: false
	},
	cantidad_disponible: {
		type: DataTypes.INTEGER,
		allowNull: false
	}
}, {
	timestamps: false,
});

export default Producto;