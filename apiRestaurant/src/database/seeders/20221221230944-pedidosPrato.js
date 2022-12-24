module.exports = {
  up: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkInsert('pedidosPrato',
      [{
        pedido_id: 1,
        prato_id: 2,

      },
      {
        pedido_id: 1,
        prato_id: 4,
      },
      ], { timestamps: false });
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkDelete('pedidosPrato', null, {});
  },
};

