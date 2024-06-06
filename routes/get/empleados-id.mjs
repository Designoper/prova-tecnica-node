const getEmpleadosId = (app, model) => {
	const RUTA = '/empleados:id';
	app.get(RUTA, async (req, res) => {
		try {
			const ID = req.params.id;
			const EMPLEADOS = await model.findAll({ where: { id: ID } });
			return res.json({ EMPLEADOS });
		}
		catch (error) {
			console.log('Error', error);
			return res.status(500).json({ message: 'Internal server error' });
		}
	});
}

export default getEmpleadosId;