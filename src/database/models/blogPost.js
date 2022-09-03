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
      tableName: 'BlogPosts',
      createdAt: 'published',
      updatedAt: 'updated',
    });
    BlogPost.associate = (models) => {
      BlogPost.belongsTo( models.User,{ foreignKey: 'userId', as: 'user' });
    };
  return BlogPost;
};
