/* 
In the same way that yield -delegation transparently passes messages through in both
directions, errors/exceptions also pass in both directions:

*/

function* foo() {
    try {
        yield "B";
    }
    catch (err) {
        console.log("error caught inside `*foo()`:", err);
    }
    yield "C";
    throw "D";
}

function* bar() {
    const c = yield "A";
    console.log(`after value has sent ${c + 3}`);
    try {
        yield* foo();
    }
    catch (err) {
        console.log("error caught inside `*bar()`:", err);
    }
    yield "E";
    yield* baz();
    // note: can't get here!
    yield "G";
}

function* baz() {
    throw "F";
}

var it = bar();

console.log("outside:", it.next().value); // outside: A

console.log("outside:", it.next(1).value); // outside: B

console.log("outside:", it.throw(2).value);

console.log("outside:", it.next(3).value);

try {
    console.log("outside:", it.next(4).value);
}
catch (err) {
    console.log("error caught outside:", err);
}

