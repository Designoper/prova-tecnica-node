const getVentas = (app, model) => {
	const RUTA = '/ventas';
	app.get(RUTA, async (_req, res) => {
		try {
			const VENTAS = await model.findAll({});
			return res.json({ VENTAS });
		}
		catch (error) {
			console.log('Error', error);
			return res.status(500).json({ message: 'Internal server error' });
		}
	});
}

export default getVentas;