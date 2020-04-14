
const p = new Promise((res, rej) => {
    res(Math.pow(10, 2))
})

p.then((val) => {
    console.log(val);
});

p.then((val) => {
    console.log(val);
})

/*
the previous snippet end up calling then(..) twice against the same promise "p"
illustrates the point made earlier, which is that Promises (once resolved) retain
their same resolution (fulfillment or rejection) forever, and can subsequently be
observed as many times as necessary.
*/

p.then(function () {
    console.log("A");
    p.then(function () {
        console.log("C");
    });
    console.log("AA");
});
p.then(function () {
    console.log("B");
    console.log("BB");
});

/*
Promise's the(..) registered observation callbacks are automatically scheduled when either
resolve(..) or reject(..) are called by the Promise creation capability.
Those scheduled callbacks will predictably be fired at the next asynchronous moment
(see "Jobs" in Chapter 1).
It's not possible for synchronous observation, so it's not possible for a synchronous
chain of tasks to run in such a way to in effect "delay" another callback from happening
as expected.
That is, when a Promise is resolved, all then(..) registered callbacks on it will be called,
in order, immediately at the next asynchronous opportunity (again, see "Jobs" in Chapter 1),
and nothing that happens inside of one of those callbacks can affect/delay the calling
of the other callbacks.

Here, "C" cannot interrupt and precede "B",
by virtue of how Promises are defined to operate.
*/