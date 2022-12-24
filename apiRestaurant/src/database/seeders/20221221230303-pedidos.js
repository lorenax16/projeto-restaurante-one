module.exports = {
  up: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkInsert('Pedidos',
      [{
        id: 1,
        cliente_id: 1,
        status: 'em andamento',
        prato_id: 1,
        valor_total: 20,
        tempo: '10 min',
      },
      {
        id: 2,
        cliente_id: 1,
        prato_id: 2,
        status: 'em andamento',
        valor_total: 20,
        tempo: '10 min',
      },
      ], { timestamps: false });
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkDelete('Pedidos', null, {});
  },
};

