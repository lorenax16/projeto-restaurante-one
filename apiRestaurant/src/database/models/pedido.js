const Pedidos = (sequelize, DataTypes) => {
  const Pedidos = sequelize.define('Pedidos', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    valor_total: DataTypes.DECIMAL,
    cliente_id: { type: DataTypes.INTEGER, foreignKey: true },
    prato_id: { type: DataTypes.INTEGER, foreignKey: true },
    tempo: DataTypes.STRING,
    status: DataTypes.STRING,
  },
    {
      timestamps: false,
      tableName: 'Pedidos',
      underscored: true
    });

  Pedidos.associate = (models) => {
    Pedidos.hasMany(models.pedidosPrato, {
      foreignKey: 'prato_id', as: 'lista_pratos',
    }),
      Pedidos.belongsTo(models.Clientes, {
        foreignKey: 'cliente_id', as: 'lista_clientes',
      });
  }

  return Pedidos;
};

module.exports = Pedidos;
