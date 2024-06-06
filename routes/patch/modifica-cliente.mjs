const patchClientes = (app, model) => {
	const RUTA = '/clientes:id';
	app.get(RUTA, async (req, res) => {
		try {
			const ID = req.params.id;
			const NOMBRE = req.params.nombre;
			const DIRECCION = req.params.direccion;
			const TELEFONO = req.params.telefono;

			const CLIENTES = await model.findAll({ where: { id: ID } });
			return res.json({ CLIENTES });
		}
		catch (error) {
			console.log('Error', error);
			return res.status(500).json({ message: 'Internal server error' });
		}
	});
}

export default patchClientes;