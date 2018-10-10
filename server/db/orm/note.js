module.exports = (sequelize, DataTypes) => {
  var Note = sequelize.define('note', {
    body: DataTypes.STRING
  });

  Note.associate = function(models) {
    models.note.belongsTo(models.user, { as: 'author' });
    models.note.belongsTo(models.group, { as: 'group' });
  };

  return Note;
};
