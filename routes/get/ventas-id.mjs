const getVenta = (app, model) => {
	const RUTA = '/ventas:id';
	app.get(RUTA, async (req, res) => {
		try {
			const ID = req.params.id;
			const VENTA = await model.findAll({ where: { id: ID } });
			return res.json({ VENTA });
		}
		catch (error) {
			console.log('Error', error);
			return res.status(500).json({ message: 'Internal server error' });
		}
	});
}

export default getVenta;