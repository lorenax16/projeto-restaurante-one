const clientes = {
  email: "lala@lala.com",
  cpf: "123.123.123-12",
};

const retorno =
{
  id: 1,
  nome: "laura",
  email: "lala@lala.com",
  cpf: "123.123.123-12",
  mesa: 1,

};

const pedido = {
  id: 1,
  valor_total: 20,
  cliente_id: 1,
  prato_id: 2,
  tempo: "10 min",
  status: "pronto",
  ClienteId: 1
}

const prato = {
  id: 1,
  nome: "feijoada",
  preco: "15",
  status: "disponivel",
  categoria: "salgada",
  image: "http://localhost:3001/images/feijoada.jpeg"
}

module.exports = { clientes, retorno, pedido, prato }
