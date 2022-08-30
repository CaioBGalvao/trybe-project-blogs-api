'use strict';

module.exports = (sequelize, DataTypes) => {
  const category = sequelize.define('Category', {
    id: {
      allowNull: false,
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true},
    name: DataTypes.STRING,
  },
    {
      timestamps: false,
      tableName: 'Categories',
    });
  return category;
};
