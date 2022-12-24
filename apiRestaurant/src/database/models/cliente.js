const Clientes = (sequelize, DataTypes) => {
  const Clientes = sequelize.define('Clientes', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    nome: DataTypes.STRING,
    email: DataTypes.STRING,
    cpf: DataTypes.STRING,
    mesa: DataTypes.INTEGER,
  },
    {
      timestamps: false,
      tableName: 'Clientes',
      underscored: true
    });

  Clientes.associate = (models) => {
    Clientes.hasMany(models.Pedidos,
      { foreingKey: 'cliente_id', as: 'pedidos2' });
  }

  return Clientes;
};

module.exports = Clientes;
