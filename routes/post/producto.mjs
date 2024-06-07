const postProductos = (app, model) => {
	const RUTA = '/productos/nuevo';
	app.post(RUTA, async (req, res) => {
		const NOMBRE = req.body?.nombre;
		const PRECIO = req.body?.precio;
		const CANTIDAD_DISPONIBLE = req.body?.cantidad_disponible;

		try {
			const newProducto = await model.create({ nombre: NOMBRE, precio: PRECIO, cantidad_disponible: CANTIDAD_DISPONIBLE });
			res.status(201).json(newProducto);
		} catch (error) {
			console.error('Error al crear el cliente:', error);
			res.status(500).json({ error: 'Error interno del servidor' });
		}
	});
}

export default postProductos;