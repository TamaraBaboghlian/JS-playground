"use strict";

function Foo() {
}

Foo.prototype.add = function (a, b) {
    return a + b;
}

Foo.prototype.a = 10;
const obj = new Foo();
console.log('a', obj.a);

const value = obj.add(10, 200);
console.log(`add result ${value}`);

console.log(Object.getPrototypeOf(obj) === Foo.prototype);

var a = 19;
const obj1 = {
    a: 10
}

const obj2 = Object.create(obj1);

console.log(obj1.prototype === obj2.prototype);
