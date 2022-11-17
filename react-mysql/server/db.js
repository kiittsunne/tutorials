require("dotenv").config();
const mysql = require("mysql2");

const db = mysql.createPool({
  host: "localhost",
  user: process.env.DB_USER,
  password: process.env.DB_PWD,
  database: process.env.DB_DB,
  socketPath: process.env.DB_SOCKET,
});

db.getConnection(function (error) {
  if (error) {
    throw error;
  } else {
    console.log("DB connected!");
  }
});

module.exports = db;
