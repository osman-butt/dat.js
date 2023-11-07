import express from "express";
import cors from "cors";
import mysql from "mysql2";
import "dotenv/config";
import fs from "fs";

const app = express();
app.use(express.json());
app.use(cors());

const port = process.env.PORT || 4000;

app.listen(port, () => console.log(`Testdata APP listening on port ${port}`));
app.get("/", (req, res) =>
  res.send("No default page - use /testdata as endpoint")
);

const dbconfig = {
  host: process.env.MYSQL_HOST,
  database: process.env.MYSQL_DATABASE,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
};

if (process.env.MYSQL_CERT) {
  dbconfig.ssl = { cs: fs.readFileSync("DigiCertGlobalRootCA.crt.pem") };
}

const connection = mysql.createConnection(dbconfig);

app.get("/testdata", (req, res) => {
  connection.query(`SELECT * FROM testnames`, function (err, results, fields) {
    console.log("ERR:");
    console.log(err);
    console.log("RESULTS:");
    console.log(results);
    console.log("FIELDS:");
    console.log(fields);

    res.json(results);
  });
});

app.get("/testdata/:id", (req, res) => {
  const id = req.params.id;
  connection.query(
    `SELECT * FROM testnames WHERE id=?`,
    [id],
    function (err, results, fields) {
      console.log("ERR:");
      console.log(err);
      console.log("RESULTS:");
      console.log(results);
      console.log("FIELDS:");
      console.log(fields);

      res.json(results);
    }
  );
});

app.post("/testdata", (req, res) => {
  connection.query(
    `INSERT INTO testnames (name) VALUES (?)`,
    [req.body.name],
    function (err, results, fields) {
      console.log("ERR:");
      console.log(err);
      console.log("RESULTS:");
      console.log(results);
      console.log("FIELDS:");
      console.log(fields);

      // Just return the new id
      res.json({ id: results.insertId });
    }
  );
});
