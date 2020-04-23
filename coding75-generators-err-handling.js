/*
The yield -pause nature of generators means that not only do we get synchronous-looking
values from async function calls, but we can also synchronously catch errors from
those async function calls!
*/

function* main() {
    var x = yield "Hello World";
    yield x.toLowerCase();
    // cause an exception!
}
var it = main();
it.next().value;
// Hello World
try {
    it.next(42);
}
catch (err) {
    console.error(err);
    // TypeError
}

/*
Synchronous-looking error handling (via try..catch) with async code is a huge win for
readability and reason-ability.
*/