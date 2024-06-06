const getProductos = (app, model) => {
	const RUTA = '/productos';
	app.get(RUTA, async (_req, res) => {
		try {
			const PRODUCTOS = await model.findAll({});
			return res.json({ PRODUCTOS });
		}
		catch (error) {
			console.log('Error', error);
			return res.status(500).json({ message: 'Internal server error' });
		}
	});
}

export default getProductos;