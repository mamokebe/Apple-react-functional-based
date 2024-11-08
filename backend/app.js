const express = require("express");
const mysql = require("mysql2");

const app = express();

const mysqlConnection = mysql.createConnection({
  user: "myDBUser",
  password: "kebede@123B",
  host: "localhost",
  database: "mydb",
});
mysqlConnection.connect((error) => {
  if (error) throw error;
  console.log("connected");
});

app.listen(3300, () => {
  console.log("server is running on http://localhost:3300");
});
