const getEmpleados = (app, model) => {
	app.get('/empleados', async (_req, res) => {
		try {
			const EMPLEADOS = await model.findAll({});
			return res.json({ EMPLEADOS });
		}
		catch (error) {
			console.log('Error', error);
			return res.status(500).json({ message: 'Internal server error' });
		}
	});
}

export default getEmpleados;