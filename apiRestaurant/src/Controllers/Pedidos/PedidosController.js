const pedidoService = require('../../Services/Pedido/pedidoService');

const createPedido = async (req, res) => {
  const { valor_total, cliente_id, tempo, status, pratos } = req.body;
  const resultado = await pedidoService.createPedido({ valor_total, cliente_id, tempo, status, pratos });
  if (!resultado) {
    return res.status(409).json({ message: 'pedido não cadastrado' });
  }
  return res.status(201).json(resultado);
};

const getAll = async (_req, res) => {
  const result = await pedidoService.getAll()
  return res.status(200).json(result);
};

const getByIdPedidos = async (req, res) => {
  const { id } = req.params;
  const result = await pedidoService.getByIdPedidos(Number(id));
  if (!result) return res.status(404).json({ message: 'Pedido não existe' });
  return res.status(200).json(result);
};


const atualizarStatus = async (req, res) => {
  const { id } = req.params;
  const { status } = req.body;

  const result = await pedidoService.atualizarStatus(id, status);
  return res.status(200).json(result);
};

module.exports = { createPedido, atualizarStatus, getByIdPedidos, getAll }
