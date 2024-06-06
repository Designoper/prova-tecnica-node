const getClientes = (app, model) => {
	const RUTA = '/clientes';
	app.get(RUTA, async (_req, res) => {
		try {
			const CLIENTES = await model.findAll({});
			return res.json({ CLIENTES });
		}
		catch (error) {
			console.log('Error', error);
			return res.status(500).json({ message: 'Internal server error' });
		}
	});
}

export default getClientes;