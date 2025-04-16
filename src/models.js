const { DataTypes } = require("sequelize");
const db = require("./db");
const sequelize = require("./db");

const KV = sequelize.define("kv", {
  key: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  value: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = { KV };
