const clienteService = require('../../Services/cliente/ClienteService');

const login = async (req, res) => {
  const { email, cpf } = req.body;
  const result = await clienteService.login(email, cpf);
  if (!result) {
    return res.status(404).json({ message: 'campos invalidos' });
  }
  return res.status(200).json(result);
};
const getAll = async (_req, res) => {
  const result = await clienteService.getAll();
  return res.status(200).json(result);
};


const create = async (request, response) => {
  const { email, cpf, nome, mesa } = request.body;
  const resultado = await clienteService.create({ email, cpf, nome, mesa });
  return response.status(201).json(resultado);
};

const getByIdCliente = async (req, res) => {
  const { id } = req.params;
  const cliente = await clienteService.getByIdCliente(id);
  return res.status(200).json(cliente);
}


module.exports = { login, getAll, create, getByIdCliente };
