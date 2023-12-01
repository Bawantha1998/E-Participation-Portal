const mysql = require("mysql");

const db = mysql.createConnection({
  host: "10.250.1.103",
  user: "epart",
  password: "epart@1234ICTA",
  database: "eparticipation",
});

// Handle database connection errors
db.connect((err) => {
  if (err) {
    console.error("Error connecting to database:", err);
  } else {
    console.log("Connected to database.");
  }
});
module.exports = db;
