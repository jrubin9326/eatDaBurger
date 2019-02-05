var mysql = require("mysql");

if (process.env.JAWSDB_URL) {
  // Database is JawsDB on Heroku
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  // Database is local
  connection = mysql.createConnection({
    port: 3306,
    host: "localhost",
    user: "root",
    password: "1234Asdf!",
    database: "burgers_db"
  });
}

var mysql = require("mysql");
