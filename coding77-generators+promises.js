/*
The best of all worlds in ES6 is to combine generators
(synchronous-looking async code) with Promises (trustable and composable).

The natural way to get the most out of Promises and generators is to yield a Promise,
and wire that Promise to control the generator's iterator.

Let's put the Promise-aware foo(..) together with the generator *main():
*/
function foo(first, second) {
    return new Promise((res, rej) => {
        setTimeout(() => {
            res(`Heeeey!!! I'm resolved have values: ${first} | ${second}`);
        }, 3000)
    })
}

function* main() {
    try {
        var text = yield foo("One", "Two");
        console.log(text);
        console.log(`Yielded...`);
    }
    catch (err) {
        console.error(err);
    }
}

var it = main();

var p = it.next().value;

// wait for the `p` promise to resolve
p.then(
    function (text) {
        it.next(text);
    },
    function (err) {
        it.throw(err);
    }
);