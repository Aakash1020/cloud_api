const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 3001;

const mysql = require("mysql");

const db = mysql.createPool({
  host: "localhost",
  user: "admin_augustus",
  password: "DemonHalfas@1729",
  database: "intersec",
});
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post("/api/insert", (req, res) => {
  const v_email = req.body.v_email;
  const bucket_name = req.body.bucket_name;
  const v_access_key_id = req.body.v_access_key_id;
  const v_secret_key = req.body.v_secret_key;

  const sqlInsert =
    "INSERT INTO vendor (v_email, bucket_name, v_access_key_id, v_secret_key) VALUES (?, ?, ?, ?);";
  db.query(
    sqlInsert,
    [v_email, bucket_name, v_access_key_id, v_secret_key],
    (err, result) => {
      console.log(err);
      // res.send("hello World");
    }
  );
});
app.listen(3001, () => {
  console.log(`running on port ${port}`);
});
