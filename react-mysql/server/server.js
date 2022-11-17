const express = require("express");
const cors = require("cors");
const reviewRoutes = require("./routes/reviews.js");

const app = express();
app.use(express.json());
app.use(cors());

app.use("/api/reviews", reviewRoutes);

app.listen(8800, () => {
  console.log("Port 8800");
});
