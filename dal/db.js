var mysql = require("mysql");

var pool = mysql.createPool({
  host: "127.0.0.1",
  user: "root",
  password: "chocolate",
  database: "todolist",
  connectionLimit: 10,
  port: 3010,
});

module.exports = pool;
