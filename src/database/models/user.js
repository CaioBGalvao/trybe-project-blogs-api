'use strict';

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    id: {
      allowNull: false,
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true},
    displayName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    image: DataTypes.STRING,
  },
    {
      timestamps: false,
      tableName: 'Users',
    });
    User.associate = (models) => {
      User.hasMany( models.BlogPost,{ foreignKey: 'userId', as: 'posts' });
    };
  return User;
};
