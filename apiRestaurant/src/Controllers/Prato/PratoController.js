const { Model } = require('sequelize');
const pratoService = require('../../Services/Prato/PratoService');


const create = async (req, res) => {
  const { nome, preco, status, categoria, image } = req.body;
  const clienteCriado = await pratoService.create({ nome, preco: Number(preco), status, categoria, image });
  if (!clienteCriado) {
    return res.status(409).json({ message: 'prato cadastrado' });
  }
  return res.status(201).json(clienteCriado);
};

const getByIdPrato = async (req, res) => {
  const { id } = req.params;
  const prato = await pratoService.getByIdPrato(id);
  return res.status(200).json(prato);
}

const getAll = async (_req, res) => {
  const allPratos = await pratoService.getAll();
  return res.status(200).json(allPratos);
};

const update = async (req, res) => {
  const id = Number(req.params.id);
  const { nome, preco, status, categoria, image } = req.body;
  await pratoService.update({ id, nome, preco, status, categoria, image });
  return res.status(200).json({ message: 'atualização feita' });
};

const destroy = async (req, res) => {
  const { id } = req.params;
  await pratoService.destroy(Number(id));
  return res.status(200).send();
};


module.exports = { getAll, create, getByIdPrato, update, destroy };
