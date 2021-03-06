const ENV = process.env.NODE_ENV || "development";
const { DB_URL } = process.env;
console.log("connecting to ENV" + ENV);

const baseConfig = {
  client: "pg",
  migrations: {
    directory: "./db/migrations",
  },
  seeds: {
    directory: "./db/seeds",
  },
};

const customConfig = {
  development: {
    connection: {
      database: "nc_news",
      // user,
      // password
    },
  },
  test: {
    connection: {
      database: "nc_news_test",
      // user,
      // password
    },
  },
  production: {
    connection: {
      connectionString: DB_URL,
      ssl: {
        rejectUnauthorized: false,
      },
    },
  },
};

module.exports = { ...customConfig[ENV], ...baseConfig };
