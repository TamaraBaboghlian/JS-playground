var p = Promise.reject(42);
p.then(
    // assumed fulfillment handler, if omitted or
    // any other non-function value passed
    // function(v) {
    //
    // return v;
    // }
    null,
    function rejected(err) {
        console.log(err)
    }
);

var p1 = Promise.resolve(100)

p1.then(result => console.log(result))