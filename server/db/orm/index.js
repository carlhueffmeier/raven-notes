const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const nameOfThisFile = path.basename(__filename);
const db = {};

const sequelizeOptions = {
  dialectOptions: {
    charset: 'utf8mb4'
  },
  define: {
    charset: 'utf8mb4',
    collation: 'utf8mb4_col'
  }
};
const sequelize = new Sequelize(process.env.MYSQL_URI, sequelizeOptions);

fs.readdirSync(__dirname)
  .filter(filename => filename !== nameOfThisFile && /\.js$/.test(filename))
  .forEach(filename => {
    const model = sequelize['import'](path.join(__dirname, filename));
    db[model.name] = model;
  });

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

module.exports = db;
