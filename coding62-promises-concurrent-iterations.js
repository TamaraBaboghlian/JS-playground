Promise.map = function (vals, cb) {
    return Promise.all(
        vals.map(function (val) {
            return new Promise(function (resolve) {
                cb(val, resolve);
                console.log("val: ", val);
                console.log("res:  ", resolve);
            })
        })
    )
}

var p1 = Promise.resolve(21);
var p2 = Promise.resolve(42);
var p3 = Promise.reject("Oops");
// double values in list even if they're in
// Promises
Promise.map([p1, p2, p3], function (pr, done) {
    // make sure the item itself is a Promise
    Promise.resolve(pr)
        .then(
            // extract value as `v`
            function (v) {
                // map fulfillment `v` to new value
                done(v * 2);
            },
            // or, map to promise rejection message
            done
        );
})
    .then(function (vals) {
        console.log(vals);      // [42,84,"Oops"]
    });