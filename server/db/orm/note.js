module.exports = (sequelize, DataTypes) => {
  var Note = sequelize.define('Note', {
    body: DataTypes.STRING
  });

  Note.associate = function(models) {
    models.Note.hasOne(models.User, { as: 'author' });
    models.Note.hasOne(models.Group, { as: 'postedIn' });
  };

  return Note;
};
