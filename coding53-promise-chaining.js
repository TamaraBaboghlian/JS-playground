var p = Promise.resolve(21);

p.then(function (v) {
    console.log(v); // 21
    return v * 2;
}).then(function (v) {
    console.log(v); // 42
})

/* 
The key to making a Promise sequence truly async capable at every step is to recall how
Promise.resolve(..) operates when what you pass to it is a Promise or thenable instead of
a final value. Promise.resolve(..) directly returns a received genuine Promise.
*/

p.then(function (v) {
    console.log(v);
    // create a promise to return
    return new Promise(function (resolve, reject) {
        // introduce asynchrony!
        setTimeout(function () {
            // fulfill with value `42`
            resolve(v * 2);
        }, 1000);
    })
})
    .then(function (v) {
        // runs after the 100ms delay in the previous step
        console.log(`Second then: ${v}`);     // 42
    })

/*

Even though we wrapped 42 up in a promise that we returned, it still got unwrapped and
ended up as the resolution of the chained promise, such that the second
received 42.

That's incredibly powerful! Now we can construct a sequence of however many async steps
we want, and each step can delay the next step (or not!), as necessary.
*/