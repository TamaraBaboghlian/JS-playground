const crypto = require("crypto");
const express = require("express");
const app = express();

app.get("/", (req, res) => {
  // doWork(5000);
  crypto.pbkdf2("a", "b", 100000, 512, "sha512", () => {
    res.send("Crypto computed!!!!");
  });
});

app.get("/fast", (req, res) => {
  res.send("This was fast");
});

app.listen(3000);
