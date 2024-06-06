import sequelize from "../db-connection.mjs";
import { DataTypes } from 'sequelize';

const Empleado = sequelize.define('Empleado', {
	nombre: {
		type: DataTypes.STRING,
		allowNull: false
	}
});

export default Empleado;