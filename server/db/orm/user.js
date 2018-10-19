module.exports = (sequelize, DataTypes) => {
  var User = sequelize.define('user', {
    id: {
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4
    },
    email: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
      validate: {
        isEmail: {
          msg: 'Please specify a valid email address'
        }
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
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
    },
    resetToken: DataTypes.STRING,
    resetTokenExpiry: DataTypes.DATE
  });

  User.associate = function(models) {
    // Associate members
    models.user.belongsToMany(models.group, { as: 'memberOf', through: 'group_members' });
    models.group.belongsToMany(models.user, { as: 'members', through: 'group_members' });
    // Associate administrators
    models.user.belongsToMany(models.group, { as: 'adminOf', through: 'group_admins' });
    models.group.belongsToMany(models.user, { as: 'admins', through: 'group_admins' });
  };

  return User;
};
