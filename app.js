const express = require("express");
const { config } = require("process");

const app = express();

const PORT = process.env.PORT || 3000;

app.get('',(req, res) => {
  res.sendFile(__dirname + '/views/index.html')
})

app.listen(PORT, () => {
  console.log("Server us running on http://localhost:$(PORT)");
}):
