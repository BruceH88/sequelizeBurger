module.exports = {
  development: {
    username: 'root',
    password: 'sapwd',
    database: 'burger2_db',
    host: '127.0.0.1',
    dialect: 'mysql'
  },
  test: {
    username: process.env.CI_DB_USERNAME,
    password: process.env.CI_DB_PASSWORD,
    database: process.env.CI_DB_NAME,
    host: '127.0.0.1',
    dialect: 'mysql'
  },
  production: {
    use_env_variable: "JAWSDB_URL",
    dialect: "mysql"
  }
}