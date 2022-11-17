const db = require("../db.js");

const getReviews = (req, res) => {
  const query = `SELECT * FROM reviews`;
  db.query(query, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
};

const addReview = (req, res) => {
  const data = Object.values(req.body).map((x) => `"${x.trim()}"`);
  const query = `INSERT INTO reviews VALUES (0, ${data.join(",")})`;
  db.query(query, (err, data) => {
    if (err) return res.json(err);
    return res.json({ message: "Review Added!" });
  });
};

module.exports = { getReviews, addReview };
