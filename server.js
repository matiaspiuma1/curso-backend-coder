const Contenedor = require('./Contenedor.js');
const express = require('express');

const app = express();

const productos = new Contenedor('productos.txt');

app.get('/productos', async (req, res) => {
	const mostrarProductos = await productos.getAll();
	res.send(mostrarProductos);
});

app.get('/productoRandom', async (req, res) => {
	const p = await productos.getAll();
	const numeroRandom = Math.floor(Math.random() * p.length);
	res.send(p[numeroRandom]);
});

const PORT = 8080;
app.listen(PORT, () => console.log(`Server listening on PORT ${PORT}`));
