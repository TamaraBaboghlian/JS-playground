function anotherFunction() {
  console.log("*****  Function called  *****");
}

var anotherObject = {
  c: true,
};

var anotherArray = [];
var value = 100;

var myObject = {
  a: 2,
  b: anotherArray,
  c: anotherObject,
  d: anotherFunction,
  e: value,
};

anotherArray.push(anotherObject, myObject);

console.log(anotherArray);

/* 
what exactly should be the respresentation of copy of myObject?
ES6 has defined Object.assign(..) for this task
it takes target object as its first parameter and one or more source objects as its subsequent parameters.
It iterates over all enumerables, owned keys on the source object(s) and copies(via =) to target.
it also hopefully return target
*/

var target = Object.assign({}, myObject);

console.log(target);

console.log(target.a);
console.log(target.b === myObject.b);
console.log(target.c === myObject.c);
console.log(target.d === myObject.d);
console.log(target.e === myObject.e);

anotherObject.c = false;
target.d();

value = 200;

console.log(target);

console.log("************   By classic Assign    ************");
var obj = myObject;
console.log(obj.a);
console.log(obj.b === myObject.b);
console.log(obj.c === myObject.c);
console.log(obj.d === myObject.d);
console.log(obj.e === myObject.e);

obj.d();
