require('dotenv').config()

module.exports = {
  development: {
    client: 'pg',
    connection: {
      database: 'galvanize-brews'
    }
  },

  production: {
    client: 'postgresql',
    connection: process.env.DATABASE_URL,
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations',
    }
  }
};
