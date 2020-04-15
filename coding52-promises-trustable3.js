/*
non-Promise thenables

if you pass a non-Promise thenable value to Promise.resolve(..),
it will attempt to unwrap that value, and the unwrapping will keep going until a
concrete final non-Promise-like value is extracted.
*/

var p = {
    then: function (cb) {
        cb(72);
    }
};
// this works OK, but only by good fortune
p
    .then(
        function fulfilled(val) {
            console.log(val); // 72
        },
        function rejected(err) {
            // never gets here
        }
    );

/* This p is a thenable, but it's not a genuine Promise. Luckily, it's reasonable. */

/* But what if you got back instead something that looked like: */

var p1 = {
    then: function (cb, errcb) {
        cb(42);
        errcb("evil laugh");
    }
};

p1
    .then(
        function fulfilled(val) {
            console.log(val); // 42
        },
        function rejected(err) {
            // oops, shouldn't have run, but runs
            console.log(err); // evil laugh
        }
    );
/* p1 is a thenable but it's not so well behaved of a promise. Is it malicious?
Or is it just ignorant of how Promises should work? It doesn't really matter,
to be honest. In either case p and p1, it's not trustable as is. */


/* 
The solution is:
we can pass either of these versions of p to Promise.resolve(..), and we'll
get the normalized, safe result we'd expect:
*/
Promise.resolve(p1) // or p
    .then(
        function fulfilled(val) {
            console.log(val); // 42
        },
        function rejected(err) {
            // never gets here
        }
    );

/*
IMPORTANT!!
===========
Promise.resolve(..) will accept any thenable, and will unwrap it to its non-thenable value.
But you get back from Promise.resolve(..) a real, genuine Promise in its place, one that
you can trust. If what you passed in is already a genuine Promise, you just get it
right back, so there's no downside at all to filtering through Promise.resolve(..)
to gain trust.
*/

/* 
So let's say we're calling a foo(..) utility and we're not sure we can trust its
return value to be a well-behaving Promise, but we know it's at least a thenable.
Promise.resolve(..) will give us a trustable Promise wrapper to chain off of:
*/

// don't just do this:
foo(42)
    .then(function (v) {
        console.log(v);
    });
// instead, do this:
Promise.resolve(foo(42))
    .then(function (v) {
        console.log(v);
    });

/*
NOTE!!
======
Another beneficial side effect of wrapping Promise.resolve(..) around any function's
return value (thenable or not) is that it's an easy way to normalize that function
call into a well-behaving async task. if foo(42) returns an immediate value sometimes,
or a Promise other times, Promise.resolve( foo(42) ) makes sure it's always a Promise
result. And avoiding Zalgo makes for much better code.
*/

/*
Trust Built:
Hopefully the previous discussion now fully "resolves" (pun intended) in your mind why
the Promise is trustable, and more importantly, why that trust is so critical in building
robust, maintainable software.
*/