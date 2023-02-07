const mysql = require("mysql2");
const config = require("./db-config");

const connection = mysql.createConnection(config);

function connectToDb() {
  connection.connect((err) => {
    if (err) {
      console.log("Could not connect to DB:", err);
      throw err;
    }

    console.log("Successfully connected to the DB");
  });
}

try {
  connectToDb();
} catch (err) {
  console.log("Could not connect to DB:", err);
}

function query(sql, params) {
  return new Promise((resolve, reject) => {
    connection.query(sql, params, (err, results) => {
      if (err) {
        reject(err);
      } else {
        resolve(results);
      }
    });
  });
}

module.exports = { query };
