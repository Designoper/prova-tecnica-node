const getProductosId = (app, model) => {
	const RUTA = '/productos:id';
	app.get(RUTA, async (req, res) => {
		try {
			const ID = req.params.id;
			const PRODUCTOS = await model.findAll({ where: { id: ID } });
			return res.json({ PRODUCTOS });
		}
		catch (error) {
			console.log('Error', error);
			return res.status(500).json({ message: 'Internal server error' });
		}
	});
}

export default getProductosId;