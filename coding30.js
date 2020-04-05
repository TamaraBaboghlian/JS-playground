const express = require("express");

app = express();
app.listen(3000, () => {
  console.log("Listening to port 3000!!");
});

app.get("/", (req, res) => {
  res.send("Hello world");
});

app.get("/course", (req, res) => {
  res.send("Hello Course!!");
});

app.get("/:id/:name", (req, res) => {
  res.send({ name: req.params.id, id: req.params.name });
});

const courses = [
  { id: 1, name: "Armenian" },
  { id: 2, name: "English" },
  { id: 3, name: "French" },
  { id: 4, name: "Arabic" }
];

course = courses.find(el => el.id === 3);
console.log(`Course value: ${course}`);
const index = courses.indexOf(course);
console.log(`Course index: ${index}`);
const newIndex = courses.indexOf({ id: 4, name: "Arabic" });
console.log(`Newindex is: ${newIndex}`);

const p = tiv =>
  new Promise(resolve => {
    setTimeout(() => {
      resolve(tiv * tiv);
    }, 2000);
  });

// const sum = arr => {};
const arr = [1, 2, 3, 4, 5, 6, 7];
console.log(arr.slice(1));
