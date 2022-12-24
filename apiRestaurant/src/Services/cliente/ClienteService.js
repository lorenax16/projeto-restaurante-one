const model = require('../../database/models');

const login = async (email, cpf) => {
  const result = await model.Clientes.findOne({
    attributes: { email, cpf },
    where: { email },
    include: { model: model.Pedidos, as: "pedidos2" },
  });
  const { nome, id, mesa, pedidos2 } = result;

  return {
    id,
    nome,
    cpf,
    mesa,
    pedidos2,
  };
};

const getAll = async () => {
  const result = await model.Clientes.findAll({
    include: { model: model.Pedidos, as: "pedidos2" },
  });

  return result;
};

const create = async ({ email, cpf, nome, mesa }) => {
  await model.Clientes.findOne({ where: { email } });
  const NovoCliente = await model.Clientes.create({ email, cpf, nome, mesa });
  return NovoCliente;
};

const getByIdCliente = async (id) => {
  const result = await model.Clientes.findByPk(id);
  return result;
}



module.exports = { login, getAll, create, getByIdCliente };
