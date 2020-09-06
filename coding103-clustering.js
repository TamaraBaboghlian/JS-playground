process.env.UV_THREADPOOL_SIZE = 1;
const cluster = require("cluster");
const crypto = require("crypto");

console.log(cluster.isMaster);

if (cluster.isMaster) {
  /* 
    if the file is being executed in master mode, this will cause index.js to be executed *again*
    in child mo
    */
  cluster.fork();
  cluster.fork();
  cluster.fork();
  cluster.fork();
  cluster.fork();
  cluster.fork();
  cluster.fork();
  cluster.fork();
  cluster.fork();
  cluster.fork();
  cluster.fork();
  cluster.fork();
} else {
  /* 
    I'm a child and I will act like a server
    */
  const express = require("express");
  const app = express();

  function doWork(duration) {
    const start = Date.now();
    while (Date.now() - start < duration) {}
  }

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
}
