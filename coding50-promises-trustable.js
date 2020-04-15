const p1 = new Promise((res, rej) => {
    res(100, 200); // 200 is silently ignored
})

p1.then(console.log);

/* Something to be aware of: If you call resolve(..)
or reject(..)
with multiple parameters, all subsequent parameters beyond the first will 
be silently ignored. Although that might seem a violation of the guarantee we just 
described, it's not exactly, because it constitutes an invalid usage of the Promise 
mechanism. Other invalid usages of the API (such as calling resolve(..)
multiple times) are similarly protected, so the Promise behavior here is
consistent (if not a tiny bit frustrating). 

If you want to pass along multiple values, you must wrap them in another single value 
that you pass, such as an array or an object
*/

const p2 = new Promise((res, rej) => {
    res("million");
    res("milliard"); // never gets here :(
})

p2.then(console.log);

/*
Promises are defined so that they can only be resolved once.
If for some reason the Promise creation code tries to call resolve(..) orreject(..)
multiple times, or tries to call both, the Promise will accept only the first
resolution, and will silently ignore any subsequent attempts.
*/

const p = new Promise((res, rej) => {
    foo.bar();  // `foo` is not defined, so error!
    res(42);    //  never gets here :(
});

p.then(
    function fulfilled() {
        // never gets here :(
        console.log("fulfissed")
    },
    function rejected(err) {
        // `err` will be a `ReferenceError` exception object
        // from the `foo.bar()` line.
        console.log(err)
    }
)

/*
If at any point in the creation of a Promise, or in the observation of its resolution,
a JS exception error occurs, such as a ReferenceError TypeError or, that exception
will be caught, and it will force the Promise in question to become rejected.

The JS exception that occurs from foo.bar() becomes a Promise rejection that you can
catch and respond to.
This is an important detail, because it effectively solves another potential Zalgo moment,
which is that errors could create a synchronous reaction whereas nonerrors would be
asynchronous. Promises turn even JS exceptions into asynchronous behavior, thereby
reducing the race condition chances greatly.
*/

/* 
But what happens if a Promise is fulfilled, but there's a JS exception error during the
observation (in a then(..) registered callback)? Even those aren't lost, but you may find
how they're handled a bit surprising, until you dig in a little deeper:
*/

var p3 = new Promise((res, rej) => {
    res(42)
});

p3.then(
    function fulfilled(msg) {
        foo.bar();
        console.log(msg);
        // never gets here :(
    },
    function rejected(err) {
        console.log(err)// never gets here either :(
    }
)
    .catch(err => console.log(err)); // gets here

/*
Wait, that makes it seem like the exception from foo.bar() really did get swallowed.
Never fear, it didn't. But something deeper is wrong, which is that we've failed
to listen for it. The p.then(..)
the call itself returns another promise, and it's that promise that will be rejected with
ReferenceError exception.
Why couldn't it just call the error handler we have defined there?
Seems like a logical behavior on the surface. But it would violate the fundamental
principle that Promises are
immutable once resolved. p was already fulfilled to the value 42 changed to a
rejection just because there's an error in observing p's resolution.
*/

