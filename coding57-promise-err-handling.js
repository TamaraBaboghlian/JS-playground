/* Promises don't use the popular "error-first callback" design style, but instead use
"split callbacks" style; there's one callback for fulfillment and one for rejection: */

var p = Promise.reject("Oops");
p.then(
    function fulfilled() {
        //never get here
    },
    function rejected(err) {
        console.log(err); // "Oops"
    }
)

/*
Warning: If you use the Promise API in an invalid way and an error occurs that prevents
proper Promise construction, the result will be an immediately thrown exception, not a
rejected Promise.
Some examples of incorrect usage that fail Promise construction:
new Promise(null), Promise.all(), Promise.race(42).
You can't get a rejected Promise if you don't use the Promise API validly enough
to actually construct a Promise in the first place!
*/