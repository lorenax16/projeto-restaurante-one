const models = require('../../database/models');

const create = async ({ nome, preco, status, categoria, image }) => {
  const novoPrato = await models.Pratos.create({ nome, preco, status, categoria, image });
  return {
    novoPrato
  };
};

const getByIdPrato = async (id) => {
  const result = await models.Pratos.findByPk(id);
  return result;
}

const getAll = async () => models.Pratos.findAll();

const update = async ({ id, nome, preco, status, categoria, image }) => {
  const result = await models.Pratos.update({ nome, preco, status, categoria, image }, { where: { id } });
  return result;
}

const destroy = async (id) => {
  const pratoID = await models.Pratos.findByPk(id);
  if (!pratoID) null;
  await models.Pratos.destroy({ where: { id } });
};


module.exports = { getAll, create, getByIdPrato, update, destroy };
