import connection from "../db-connection.mjs";
import { DataTypes } from 'sequelize';
import { createHash } from 'node:crypto';

const Usuario = connection.define('Usuario', {
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
}, {
	timestamps: false,
});

export default Usuario;