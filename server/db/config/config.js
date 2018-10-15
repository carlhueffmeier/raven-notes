module.exports = {
  development: {
    dialect: 'mysql',
    use_env_variable: 'DATABASE_URL',
    dialectOptions: {
      charset: 'utf8mb4'
    },
    define: {
      charset: 'utf8mb4',
      collation: 'utf8mb4_col',
      freezeTableName: true
    }
  },
  production: {
    dialect: 'mysql',
    use_env_variable: 'DATABASE_URL',
    dialectOptions: {
      charset: 'utf8mb4'
    },
    define: {
      charset: 'utf8mb4',
      collation: 'utf8mb4_col',
      freezeTableName: true
    }
  }
};
