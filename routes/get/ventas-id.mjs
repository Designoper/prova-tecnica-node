const getVentasId = (app, model) => {
	const RUTA = '/ventas:id';
	app.get(RUTA, async (req, res) => {
		try {
			const ID = req.params.id;
			const VENTAS = await model.findAll({ where: { id: ID } });
			return res.json({ VENTAS });
		}
		catch (error) {
			console.log('Error', error);
			return res.status(500).json({ message: 'Internal server error' });
		}
	});
}

export default getVentasId;