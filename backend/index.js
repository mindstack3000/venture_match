const express = require("express");
const cors = require("cors");

const bodyParser = require("body-parser");
const PORT = process.env.PORT || 8080;
const app = express();

app.use(bodyParser.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.use("/user", require("./controller/user.controller"));
// app.use('/entrepreneur',require("./controller/"))

app.listen(PORT, (req, res) => {
  console.log(`Server is running on port ${PORT}`);
});
