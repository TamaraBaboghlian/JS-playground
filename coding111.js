const objects = [
  { a: 1, b: 2 },
  { a: 10, b: 20 },
];

const obj2 = [...objects];

objects[0] = { a: 100, b: 200 };
console.log(objects);

console.log("*************************");
go(objects);
console.log(objects);

function go(obj) {
  //   objNew = { val1: 9, val2: 10 };
  //   obj = objNew;
  obj.val3 = "WOW!!!";
  console.log("inside function");
  console.log(obj);
}

console.log(1000 === 1000);
