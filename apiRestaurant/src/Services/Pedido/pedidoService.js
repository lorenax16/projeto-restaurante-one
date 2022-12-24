const model = require('../../database/models')

const createPedido = async ({ valor_total, cliente_id, tempo, status, pratos}) => {
  const { dataValues } = await model.Pedidos.create({ valor_total, cliente_id, tempo, status, pratos});
  pratos.map(async prato => { await model.pedidosPrato.create({ pedido_id: dataValues.id, prato_id: prato.id }) }) 
  return {...dataValues, pratos};
};

const getAll = async () => {
  const result = await model.Pedidos.findAll({
    include: { model: model.pedidosPrato, as: "lista_pratos" },
  })
  return result;
};

const getByIdPedidos = async (id) => {
  const result = await model.Pedidos.findOne({ where: id })
  return result;
};

const atualizarStatus = async (id, status) => {
  const result = await model.Pedidos.update({ status }, { where: { id } });
  if (!result) return null;
  return result;
};

module.exports = { createPedido, getByIdPedidos, atualizarStatus, getAll }
