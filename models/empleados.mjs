import sequelize from "../db-connection.mjs";
import { DataTypes } from 'sequelize';

const Empleado = sequelize.define('Empleado', {
	nombre: {
		type: DataTypes.STRING,
		allowNull: false
	},
	password: {
		type: DataTypes.STRING,
		set(value) {
			// Storing passwords in plaintext in the database is terrible.
			// Hashing the value with an appropriate cryptographic hash function is better.
			this.setDataValue('password', hash(value));
		},
	},
}, {
	timestamps: false,
});

export default Empleado;