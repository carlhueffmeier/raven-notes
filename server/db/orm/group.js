module.exports = (sequelize, DataTypes) => {
  var Group = sequelize.define('group', {
    id: {
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: {
          args: [3],
          msg: 'Name must be at least 3 characters long'
        }
      }
    }
  });

  return Group;
};
