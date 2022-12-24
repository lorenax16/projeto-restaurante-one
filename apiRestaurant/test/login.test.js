const chai = require('chai');
const sinon = require('sinon');
const chaiHttp = require('chai-http');
chai.use(chaiHttp);
const app = require('../src/app/app')

// testes de integração so se da certo a requisição
const { Clientes, Pedidos, Pratos } = require('../src/database/models');
const { clientes, retorno, pedido, prato } = require('../test/mock/login');

describe('Clientes', () => {
  describe('metodo POST na /login ', () => {
    beforeEach(() => {
      sinon.stub(Clientes, 'findOne').resolves(clientes);
      sinon.stub(Clientes, 'findByPk').resolves(retorno)
    });

    afterEach(() => {
      sinon.restore();
    });
    it('/login retorna status 200', async () => {
      const response = await chai.request(app).post('/login').send(clientes);
      chai.expect(response.status).to.equal(200);
    });
    it('/clientes:id retorna o id de um cliente', async () => {
      const response = await chai.request(app).get('/clientes/1');
      chai.expect(response.status).to.equal(200);
    });
  });
});

describe('metodo get do /pedidos', () => {
  beforeEach(() => {
    sinon.stub(Pedidos, 'findByPk').resolves(pedido)
  });

  afterEach(() => {
    sinon.restore();
  });
  it('/pedidos:id retorna o id de um pedido', async () => {
    const response = await chai.request(app).get('/pedidos/1');
    chai.expect(response.status).to.equal(200);
  });
});

describe('metodo get do /pratos', () => {
  beforeEach(() => {
    sinon.stub(Pratos, 'findAll').resolves(prato)
    sinon.stub(Pratos, 'findOne').resolves(prato)

  });

  afterEach(() => {
    sinon.restore();
  });
  it('/pratos retorna todos os pratos', async () => {
    const response = await chai.request(app).get('/pratos');
    chai.expect(response.status).to.equal(200);
  });
  it('/pratos/:id retorna o id de um prato', async () => {
    const response = await chai.request(app).get('/pratos/1');
    chai.expect(response.status).to.equal(200);
  });
});
