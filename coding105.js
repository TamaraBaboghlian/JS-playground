const _ = require("lodash");

const val = {};
const arr = [];
const obj = {
  one: "meg",
  two: "yergu",
  three: { hi: "parev", bonjour: "Good morning" },
};
const a = null;

console.log(Object.keys(obj));
console.log(Object.values(obj));

console.log(_.isEmpty(val));
console.log(_.isEmpty(arr));
console.log(_.isEmpty(a));
