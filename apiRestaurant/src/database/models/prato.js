const Pratos = (sequelize, DataTypes) => {
  const Pratos = sequelize.define('Pratos', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    nome: DataTypes.STRING,
    preco: DataTypes.DECIMAL,
    status: DataTypes.STRING,
    categoria: DataTypes.STRING,
    image: DataTypes.STRING,
  },
    {
      timestamps: false,
      tableName: 'Pratos',
      underscored: true
    });

  Pratos.associate = (models) => {
    Pratos.hasMany(models.pedidosPrato, {
      foreignKey: 'prato_id', as: 'lista_pratos',
    });
  }
  return Pratos;
};

module.exports = Pratos;
