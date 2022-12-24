module.exports = {
  up: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkInsert('Pratos',
      [{
        id: 1,
        nome: 'feijoada',
        preco: 15,
        status: 'disponivel',
        categoria: 'salgada',
        image: 'http://localhost:3001/images/feijoada.jpeg',
      },
      {
        id: 2,
        nome: 'mussie de maracuja',
        preco: 1.15,
        status: 'disponivel',
        categoria: 'doce',
        image: 'http://localhost:3001/images/mussie.jpeg',
      },
      {
        id: 3,
        nome: 'suco de laranja',
        preco: 3,
        status: 'indisponivel',
        categoria: 'bebida',
        image: 'http://localhost:3001/images/laranja.jpeg',
      },
      {
        id: 4,
        nome: 'macarrão carbonara',
        preco: 10,
        status: 'indisponivel',
        categoria: 'salgada',
        image: 'http://localhost:3001/images/carbonara.jpeg',
      },
      {
        id: 5,
        nome: 'coca-cola',
        preco: 3,
        status: 'disponivel',
        categoria: 'bebida',
        image: 'http://localhost:3001/images/coca.jpeg',
      },
      {
        id: 6,
        nome: 'bolo de cenoura',
        preco: 4,
        status: 'indisponivel',
        categoria: 'doce',
        image: 'http://localhost:3001/images/cenoura.jpeg',
      },

      ], { timestamps: false });
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkDelete('Pratos', null, {});
  },
};

