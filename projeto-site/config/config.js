module.exports = {
  production: {
    username: 'Isabella',
    password: '#Gf49477991880',
    database: 'bdProjeto-Individual',
    host: 'projeto-individual2.database.windows.net',
    dialect: 'mssql',
    xuse_env_variable: 'DATABASE_URL',
    dialectOptions: {
      options: {
        encrypt: true
      }
    },
    pool: { 
      max: 5,
      min: 1,
      acquire: 5000,
      idle: 30000,
      connectTimeout: 5000
    }
  }
};
 