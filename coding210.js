const target = { a: 1, b: 2 };
const source = { b: 4, c: 5, d: ["one", "two", "three"] };


const returnedTarget = Object.assign(target, source);

console.log(target);
// expected output: Object { a: 1, b: 4, c: 5 }

console.log(returnedTarget);
// expected output: Object { a: 1, b: 4, c: 5 }

source.d[0] = "UNO";
target.a = 100;

console.log("After update");
console.log(target);
console.log(returnedTarget);
console.log(source);

console.log(target === returnedTarget);
console.log(target === source);
console.log(target.d === source.d)

const mySource = Object.create(source)
