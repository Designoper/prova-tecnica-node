const getProducto = (app, model) => {
	const RUTA = '/productos/:id';
	app.get(RUTA, async (req, res) => {
		try {
			const ID = req.params.id;
			const PRODUCTO = await model.findOne({ where: { id: ID } });
			return res.json({ PRODUCTO });
		}
		catch (error) {
			console.log('Error', error);
			return res.status(500).json({ message: 'Internal server error' });
		}
	});
}

export default getProducto;