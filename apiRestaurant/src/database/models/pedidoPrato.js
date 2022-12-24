const pedidosPrato = (sequelize, DataTypes) => {
  const pedidosPrato = sequelize.define('pedidosPrato', {
    pedido_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      foreignKey: true,
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
      allowNull: false
    },
    prato_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      foreignKey: true,
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
      allowNull: false
    },
  },
    {
      timestamps: false,
      tableName: 'pedidosPrato',
    });

  pedidosPrato.associate = (models) => {
    pedidosPrato.belongsTo(models.Pratos, {
      foreignKey: 'prato_id',
      as: 'lista_pratos',
    });
    pedidosPrato.belongsTo(models.Pedidos, {
      foreignKey: 'pedido_id',
      as: 'pedidos2',
    });
    
  }

  return pedidosPrato;
}

module.exports = pedidosPrato;
