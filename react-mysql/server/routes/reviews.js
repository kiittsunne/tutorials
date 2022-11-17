const express = require("express");
const { getReviews, addReview } = require("../controllers/reviews.js");

const router = express.Router();

router.get("/get_all_reviews", getReviews);
router.put("/new_review", addReview);

module.exports = router;
