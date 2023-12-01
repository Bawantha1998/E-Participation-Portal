const db = require("../database/connection");

const getnews = (req, res) => {
  const q = "SELECT * FROM tbl_pressrelease";
  db.query(q, (err, data) => {
    if (err) {
      console.log(err);
      return res.json(err);
    }
    return res.json(data);
  });
};
exports.getnews = getnews;
