module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    'User',
    {
      id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
      name: DataTypes.STRING,
      birthDate: DataTypes.STRING,
    },
    {
      timestamps: false,
      tableName: 'User',
      underscored: true,
    },
  );

  return User;
};
