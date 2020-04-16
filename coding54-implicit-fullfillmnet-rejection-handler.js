var p = new Promise(function (res, rej) {
    rej("Oops");
});

var p2 = p.then(
    function fulfilled() {
        // never gets here
    },
    // assumed rejection handler, if omitted or
    // any other non-function value passed
    // function(err) {
    // throw err;
    // }
)
// .catch(err => console.log(err));

/*
As you can see, the assumed rejection handler simply rethrows the error, which ends up
forcing p2 (the chained promise) to reject with the same error reason. In essence, this
allows the error to continue propagating along a Promise chain until an explicitly defined
rejection handler is encountered.
*/

/* 
If a proper valid function is not passed as the fulfillment handler parameter to then(..),
there's also a default handler substituted:
*/

var p2 = Promise.resolve(42);
p2.then(
    null,
    function rejected(err) {
        // never gets here
    }
).then(console.log); //outputs 42

/*
As you can see, the default fulfillment handler simply passes whatever value it receives
along to the next step (Promise).
*/