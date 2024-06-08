const patchCliente = (app, model) => {
	const RUTA = '/clientes/:id';
	app.patch(RUTA, async (req, res) => {
		try {
			const ID = req.params.id;
			const NOMBRE = req.body?.nombre;
			const PASSWORD = req.body?.password;
			const DIRECCION = req.body?.direccion;
			const TELEFONO = req.body?.telefono;

			const CLIENTE = await model.findOne({ where: { id: ID } });
			CLIENTE.set({
				nombre: NOMBRE,
				password: PASSWORD,
				direccion: DIRECCION,
				telefono: TELEFONO
			});

			await CLIENTE.save();

			return res.json({ ClienteActualizado: CLIENTE });
		}
		catch (error) {
			console.log('Error', error);
			return res.status(500).json({ message: 'Internal server error' });
		}
	});
}

export default patchCliente;