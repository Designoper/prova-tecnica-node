import connection from "../db-connection.mjs";
import { DataTypes } from 'sequelize';
import { createHash } from 'node:crypto';

const Cliente = connection.define('Cliente', {
	nombre: {
		type: DataTypes.STRING,
		allowNull: false
	},
	password: {
		type: DataTypes.STRING,
		allowNull: false,
		set(value) {
			const HASH = createHash('sha256');
			HASH.update(value);
			const HASHED_PASSWORD = HASH.digest('hex');
			this.setDataValue('password', HASHED_PASSWORD);
		},
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