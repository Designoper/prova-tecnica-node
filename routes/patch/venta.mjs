const patchVenta = (app, model) => {
	const RUTA = '/ventas/:id';
	app.patch(RUTA, async (req, res) => {
		try {
			const ID = req.params.id;
			const PRODUCTO_ID = req.body?.productoId;
			const CLIENTE_ID = req.body?.clienteId;
			const EMPLEADO_ID = req.body?.empleadoId;

			const VENTA = await model.findOne({ where: { id: ID } });
			VENTA.set({
				productoId: PRODUCTO_ID,
				clienteId: CLIENTE_ID,
				empleadoId: EMPLEADO_ID
			});

			await VENTA.save();

			return res.json({ VentaActualizada: VENTA });
		}
		catch (error) {
			console.log('Error', error);
			return res.status(500).json({ message: 'Internal server error' });
		}
	});
}

export default patchVenta;