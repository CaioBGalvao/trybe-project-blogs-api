'use strict';

module.exports = (sequelize, DataTypes) => {
  const BlogPost = sequelize.define('BlogPost', {
    id: {
      allowNull: false,
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true},
    title: DataTypes.STRING,
    userId: DataTypes.INTEGER,
    content: DataTypes.STRING,
    published: DataTypes.DATE,
    updated: DataTypes.DATE,
  },
    {
      timestamps: false,
      tableName: 'BlogPosts',
    });
    BlogPost.associate = (models) => {
      BlogPost.belongsTo( models.User,{ foreignKey: 'userId', as: 'user' });
    };
  return BlogPost;
};
