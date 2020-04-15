var p3 = new Promise(function (res, rej) {
    res("B");
})

var p1 = new Promise(function (res, rej) {
    res(p3)
})

var p2 = new Promise(function (res, rej) {
    res("A");
})

p1.then(function (v) {
    console.log(v);
})

p2.then(function (v) {
    console.log(v);
})

/*
p1 is resolved not with an immediate value, but with another promise p3,
which is itself resolved with the value "B", The specified behavior is to unwrap
p3 into p1, but asynchronously, so p1's callback(s) are behind p2's callback(s)
in the asynchronus Job queue (see Chapter 1).

To avoid such nuanced nightmares, you should never rely on anything about the
ordering/scheduling of callbacks across Promises. In fact, a good practice is
not to code in such a way where the ordering of multiple callbacks matters at all.
Avoid that if you can.
*/
