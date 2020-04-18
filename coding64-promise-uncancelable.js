/*
One of promise limtations:
Once you create a Promise and register a fulfillment and/or rejection handler for it, there's
nothing external you can do to stop that progression if something else happens to make that
task moot.
*/

/* 
Consider our Promise timeout scenario from earlier:
*/

function timeoutPromise(delay) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            reject("Timed Out")
        }, delay)
    })
}

function foo(delay) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve("Fooo came on Time!!!!!")
        }, delay)
    })
}

Promise.race([foo(300), timeoutPromise(200)]).then(console.log).catch(console.log);

/*
consider we have
*/
// var p = foo(200);
// p.then(function (mesg) {
//     // still happens even in the timeout case :(
//     console.log(mesg)
// });

/* 
The "timeout" was external to the promise p, so p itself keeps going, which we probably
don't want.

One option is to invasively define your resolution callbacks:
*/

var OK = true;
var p = foo(100);

Promise.race([
    p,
    timeoutPromise(200)
        .catch(function (err) {
            console.log("AGAIN timed out!!!!!!!!!")
            OK = false;
            throw err;
        })

])

p.then(function (res) {
    if (OK) {
        // only happens if no timeout! :)
        console.log("AGAIN Foo came on time!!");
    }
})

/*
This is ugly. It works, but it's far from ideal. Generally, you should try to avoid such
scenarios.

A single Promise is not really a flow-control mechanism (at least not in a very meaningful
sense), which is exactly what cancelation refers to; that's why Promise cancelation would
feel awkward.
*/