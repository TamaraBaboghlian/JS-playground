/* 
If you pass an immediate, non-Promise, non-thenable value to Promise.resolve(),
you get a promise that's fulfilled with that value.
In other words, these two promises p1 and p2 will behave basically identically:
*/
var p1 = new Promise(function (res, rej) {
    res(42);
})

var p2 = Promise.resolve(42);

/* But if you pass a genuine Promise to Promise.resolve(..), you just get the same promise
back: */

var p3 = Promise.resolve(42);
var p4 = Promise.resolve(p3);

console.log(p3 === p4); // true

/*
Even more importantly, if you pass a non-Promise thenable value to, it
Promise.resolve(..) will attempt to unwrap that value, and the unwrapping
will keep going until a concrete final non-Promise-like value is extracted.
*/

