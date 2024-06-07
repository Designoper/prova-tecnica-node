const getCliente = (app, model) => {
	const RUTA = '/clientes:id';
	app.get(RUTA, async (req, res) => {
		try {
			const ID = req.params.id;
			const CLIENTE = await model.findOne({ where: { id: ID } });
			return res.json({ CLIENTE });
		}
		catch (error) {
			console.log('Error', error);
			return res.status(500).json({ message: 'Internal server error' });
		}
	});
}

export default getCliente;