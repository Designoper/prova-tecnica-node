const patchEmpleado = (app, model) => {
	const RUTA = '/empleados/:id';
	app.patch(RUTA, async (req, res) => {
		try {
			const ID = req.params.id;
			const NOMBRE = req.body?.nombre;

			const EMPLEADO = await model.findOne({ where: { id: ID } });
			EMPLEADO.set({
				nombre: NOMBRE,
			});

			await EMPLEADO.save();

			return res.json({ EmpleadoActualizado: EMPLEADO });
		}
		catch (error) {
			console.log('Error', error);
			return res.status(500).json({ message: 'Internal server error' });
		}
	});
}

export default patchEmpleado;