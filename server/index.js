const dotenv = require("dotenv");
dotenv.config();
dotenv.config({ path: ".env.local" });

const express = require("express");
const cors = require("cors");
const jwt = require("jsonwebtoken");

const app = express();
const port = 4000;

app.use(cors());
app.get("/", (req, res) => {
  const token = req.headers?.authorization?.split(" ")[1] ?? "";

  try {
    const data = jwt.verify(token, process.env.JWT_SECRET);
    console.log({ data });
  } catch (e) {
    res.send({
      message: "Your session expired. Sign in again.",
    });
    return;
  }

  res.send({
    message: `Hello World`,
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
