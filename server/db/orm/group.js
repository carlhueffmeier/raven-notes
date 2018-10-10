module.exports = (sequelize, DataTypes) => {
  var Group = sequelize.define('group', {
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    name: DataTypes.STRING
  });

  return Group;
};
