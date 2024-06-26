const postCliente = (app, model) => {
	const RUTA = '/clientes/nuevo';
	app.post(RUTA, async (req, res) => {
		const NOMBRE = req.body?.nombre;
		const PASSWORD = req.body?.password;
		const DIRECCION = req.body?.direccion;
		const TELEFONO = req.body?.telefono;

		try {
			const newCliente = await model.create({
				nombre: NOMBRE,
				password: PASSWORD,
				direccion: DIRECCION,
				telefono: TELEFONO
			});
			res.status(201).json(newCliente);
		} catch (error) {
			console.error('Error al crear el cliente:', error);
			res.status(500).json({ error: 'Error interno del servidor' });
		}
	});
}

export default postCliente;