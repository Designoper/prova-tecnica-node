const putProducto = (app, model) => {
	const RUTA = '/productos:id';
	app.put(RUTA, async (req, res) => {
		const ID = req.params.id;
		const NOMBRE = req.body?.nombre;
		const PRECIO = req.body?.precio;
		const CANTIDAD_DISPONIBLE = req.body?.cantidad_disponible;

		try {
			const PRODUCTO = await model.findOne({ where: { id: ID } });
			PRODUCTO.set({
				nombre: NOMBRE,
				precio: PRECIO,
				cantidad_disponible: CANTIDAD_DISPONIBLE
			});

			await PRODUCTO.save();

			return res.json({ ProductoActualizado: PRODUCTO });
		}
		catch (error) {
			console.error('Error al crear el cliente:', error);
			res.status(500).json({ error: 'Error interno del servidor' });
		}
	});
}

export default putProducto;