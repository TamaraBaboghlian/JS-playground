function* foo(x) {
    var y = x * (yield);
    return y;
}

// start `foo(..)`
var it = foo(7);

it.next();

var res = it.next(7);

console.log(res.value);

/*
what happened!!
Notice something very important but also easily confusing, even to seasoned JS developers:
depending on your perspective, there's a mismatch between the yield and the next(..)  call.
In general, you're going to have one more next(..) call than you have yield.
statements -- the preceding snippet has one yield and two next(..) calls.

Why the mismatch?

Because the first next(..) always starts a generator, and runs to the first yield.
But it's second next(..) call that fulfills the first paused yield expression.
and the third next(..) would fulfill the second yield, and so on.

*/