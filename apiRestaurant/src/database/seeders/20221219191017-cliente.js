module.exports = {
  up: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkInsert('Clientes',
      [{
        id: 1,
        nome: 'Caroline Silva',
        email: 'carol@carol.com',
        cpf: '711.552.888-52',
        mesa: '1',
      },
      {
        id: 2,
        nome: 'maria eduarda perez',
        email: 'maria@maria.com',
        cpf: '588.689.456-87',
        mesa: '2',
      },
      {
        id: 3,
        nome: 'jose david oliveira',
        email: 'jose@jose.com',
        cpf: '945.657.854.23',
        mesa: '3',
      },
      {
        id: 4,
        nome: 'jean betancourt',
        email: 'jean@jean.com',
        cpf: '458.785.452-12',
        mesa: '4',
      },
      ], { timestamps: false });
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkDelete('Clientes', null, {});
  },
};

