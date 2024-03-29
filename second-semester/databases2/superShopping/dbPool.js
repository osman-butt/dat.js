import mysql from "mysql2/promise";
import "dotenv/config";
import fs from "fs";

// using the variables from the .env file
// and creates the connection to database
const dbConfig = {
  connectionLimit: 10,
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  database: process.env.MYSQL_DATABASE,
  password: process.env.MYSQL_PASSWORD,
  multipleStatements: true,
};

const pool = mysql.createPool(dbConfig);

export default pool;
