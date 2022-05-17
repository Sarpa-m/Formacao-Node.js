const sequelize = require("sequelize");

const connection = new sequelize("node_db", "node_db", "ZRkUGgaT$Y&", {
    host: "localhost",
    dialect: "mysql",
  });

module.exports = connection;
