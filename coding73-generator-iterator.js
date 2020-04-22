/* 
We can implement the "something" infinite number series producer from earlier with a
generator, like this:
*/

function* something() {
    var nextVal;
    while (true) {
        if (nextVal === undefined) {
            nextVal = 1;
        }
        else {
            nextVal = (3 * nextVal) + 6;
        }
        yield nextVal;
    }
}

/*
A "while .. true" loop would normally be a very bad thing to include in a real JS
program, at least if it doesn't have a break or return in it, as it would likely run forever,
synchronously, and block/lock-up the browser UI.
However, in a generator, such a loop is generally totally OK if it has a yield in it,
as the generator will pause at each iteration, yield-ing back to the main program and/or to
the event loop queue.
To put it glibly, "generators put the while..true back in JS programming!",
meaning there's no need for the closure boilerplate to preserve variable state across calls.

Not only is it simpler code -- we don't have to make our own iterator interface -- it actually is
more reason-able code, because it more clearly expresses the intent.
For example, the while..true loop tells us the generator is intended to run forever -- to keep generating
values as long as we keep asking for them.
*/

/* 
And now we can use our shiny new *something() generator with a for..of loop, and you'll see
it works basically identically:
*/

var itr = something();
for (var v of itr) {
    console.log(v);
    // don't let the loop run forever!
    if (v > 1000)
        break;
}
