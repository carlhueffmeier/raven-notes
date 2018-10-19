module.exports = (sequelize, DataTypes) => {
  var Note = sequelize.define('note', {
    id: {
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4
    },
    contentJson: DataTypes.JSON,
    contentText: DataTypes.TEXT
  });

  Note.associate = function(models) {
    models.note.belongsTo(models.user, { as: 'author', foreignKey: 'authorId' });
    models.note.belongsTo(models.group, { as: 'group', foreignKey: 'groupId' });
  };

  return Note;
};
