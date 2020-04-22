/* Imagine you're producing a series of values where each value has a definable relationship to
the previous value. To do this, you're going to need a stateful producer that remembers the
last value it gave out. */

var gimmeSomething = (function () {
    var nextVal;
    return function () {
        if (nextVal === undefined) {
            nextVal = 1;
        }
        else {
            nextVal = (3 * nextVal) + 6;
        }
        return nextVal;
    };
})();

console.log("****   gimmeSomething  ****");
console.log(gimmeSomething());
console.log(gimmeSomething());
console.log(gimmeSomething());
console.log(gimmeSomething());

/* 
In fact, this task is a very common design pattern, usually solved by iterators. An iterator is a
well-defined interface for stepping through a series of values from a producer. The JS
interface for iterators, as it is in most languages, is to call next(..) each time you want the
next value from the producer.
*/
var something = (function () {
    var nextVal;
    return {
        // needed for `for..of` loops
        [Symbol.iterator]: function () {
            console.log(`this ${JSON.stringify(this)}`);
            return this;
        },
        // standard iterator interface method
        next: function () {
            if (nextVal === undefined) {
                nextVal = 1;
            }
            else {
                nextVal = (3 * nextVal) + 6;
            }
            return { done: false, value: nextVal };
        }
    };
})();

console.log(`***    something   ***`);
console.log(something.next().value); // 1
console.log(something.next().value); // 9
console.log(something.next().value); // 33
console.log(something.next().value); // 105

for (var v of something) {
    console.log(v);
    // don't let the loop run forever!
    if (v > 500) {
        break;
    }
}   // 1 9 33 105 321 969

/* 
1. The for..of loop automatically calls next() for each iteration -- it doesn't pass any values
in to next() -- and it will automatically terminate on receiving a done:true.
It's quite handy for looping over a set of data.

2. The for..of loop expects 'something' to be iterable, so it looks for and calls its 
Symbol.iterator function. We defined that function to simply return this, so it just gives itself back.

In addition to making your own iterators, many built-in data structures in JS (as of ES6), like
arrays, also have default iterators:
*/

var a = [1, 3, 5, 7, 9];
for (var v of a) {
    console.log(v);
}
/*
Note: It may seem a strange omission by ES6, but regular objects intentionally do not
come with a default iterator the way arrays do. The reasons go deeper than we will cover
here. If all you want is to iterate over the properties of an object (with no particular
guarantee of ordering), Object.keys(..) returns an array, which can use like for loop
*/

