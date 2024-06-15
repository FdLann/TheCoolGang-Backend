// config/Database.js
import mysql from "mysql2/promise";

const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "",
  database: "datarj",
});

export default db;
