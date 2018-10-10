const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const nameOfThisFile = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
const config = require('../config/config.js')[env];
const db = {};

let sequelize;
if (config.use_env_variable) {
  console.log(config);
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config);
}

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

db.sequelize = sequelize;
db.Sequelize = Sequelize;

console.log(Object.keys(db));

module.exports = db;
