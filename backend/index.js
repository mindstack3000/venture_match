const express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser');

const PORT = process.env.PORT || 5500;
const app = express();

app.use(bodyParser.json());

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.use("/user", require("./controller/user.controller"));
// app.use('/entrepreneur',require("./controller/"))

app.listen(PORT, (req, res) => {
  console.log(`Server is running on port ${PORT}`);
});
