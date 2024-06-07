const getEmpleado = (app, model) => {
	const RUTA = '/empleados:id';
	app.get(RUTA, async (req, res) => {
		try {
			const ID = req.params.id;
			const EMPLEADO = await model.findOne({ where: { id: ID } });
			return res.json({ EMPLEADO });
		}
		catch (error) {
			console.log('Error', error);
			return res.status(500).json({ message: 'Internal server error' });
		}
	});
}

export default getEmpleado;