const CONFIG = require("../config/dbConfig");
const { Sequelize, DataTypes } = require("sequelize");

const sequelize = new Sequelize(
  CONFIG.DB_NAME,
  CONFIG.DB_USER,
  CONFIG.DB_PASSWORD,
  {
    host: CONFIG.DB_HOST,
    dialect: CONFIG.DB_DIALECT,
  },
  {
    operatorsAliases: false,

    DB_POOL: {
      max: CONFIG.DB.pool.max,
      min: CONFIG.DB.pool.min,
      acquire: CONFIG.DB.pool.acquire,
      idle: CONFIG.DB.pool.idle,
    },
  }
);

sequelize
  .authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
  })
  .catch((err) => {
    console.log("Unable to connect to the database:", err);
  });

const db = {};

db.sequelize = sequelize;
db.Sequelize = Sequelize;

// Add our tables
db.books = require("./book")(sequelize, DataTypes);

// sync all models
// force: false will not drop the table if it already exists
db.sequelize
  .sync({ force: false })
  .then(() => {
    console.log("Database & tables synced");
  })
  .catch((err) => {
    console.error("Unable to sync database & tables:", err);
  });

module.exports = db;
