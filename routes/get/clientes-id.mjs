const getClientesId = (app, model) => {
	app.get('/clientes/:id', async (req, res) => {
		try {
			const ID = req.params.id;
			const CLIENTES = await model.findAll({ where: { id: ID } });
			return res.json({ CLIENTES });
		}
		catch (error) {
			console.log('Error', error);
			return res.status(500).json({ message: 'Internal server error' });
		}
	});
}

export default getClientesId;