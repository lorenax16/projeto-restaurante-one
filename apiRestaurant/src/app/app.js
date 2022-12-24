const express = require('express');
const cors = require('cors');
const router = require('../routes');

const app = express();
app.use(cors());

app.use(express.json());

app.use('/images', express.static('pratos'));

app.use('/login', router.loginRoute);
app.use('/clientes', router.clienteRoute);
app.use('/pedidos', router.pedidoRoute);
app.use('/pratos', router.pratosRoute);

module.exports = app;
