module.exports = (sequelize, DataTypes) => {
  var User = sequelize.define('User', {
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    name: DataTypes.STRING
  });

  User.associate = function(models) {
    models.User.belongsToMany(models.Group, { through: 'UserGroup' });
  };

  return User;
};
