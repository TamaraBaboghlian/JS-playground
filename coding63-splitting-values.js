function getY(x) {
    return new Promise((res, rej) => {
        setTimeout(() => {
            res((3 * x) - 1);
        }, 100)
    })
};

function foo(bar, baz) {
    var x = bar * baz;
    return getY(x)
        .then(function (y) {
            return [x, y];
        })
};

foo(10, 20).then(function (mesgs) {
    var x = mesgs[0];
    var y = mesgs[1];
    console.log(x, y);
})

/*
niice change!!
First, let's rearrange what foo(..) returns so that we don't have to wrap x and y int a
singel array value to transport through one Promise. Instead, we can wrap each value
into its own promise:
*/

function foo2(bar, baz) {
    var x = bar * baz;
    // return both promises
    return [
        Promise.resolve(x),
        getY(x)
    ]
}

Promise.all(foo2(10, 20)).then(mesg => {
    var x = mesg[0];
    var y = mesg[1];
    console.log(x, y)
});

/*
Is an array of of promises really better than an array of values passed through
a single promise? Syntactically, it's not much of an improvement.

But second approach more closely embraces the Promise design theory.
It's now easier in the future to refactor to split the calculation of x and y
into separate functions. It's cleaner and more flexible to let the calling code
decide how to orchestrate the two promises -- using Promise.all([ .. ])
here, but certainly not the only option -- rather than to abstract such
details away inside of foo(..)
*/

/* 
The var x = .. and var y = .. assignments are still awkward overhead.
ES6 offers the array parameter destructuring form:
*/

foo(5, 10).then(([x, y]) => {
    console.log(x, y);
})