function* foo() {
    console.log("`*foo()` starting");
    yield 3;
    yield 4;
    console.log("`*foo()` finished");
}

function* bar() {
    yield 1;
    yield 2;
    yield* foo();
    // `yield`-delegation!
    yield 5;
}

var it = bar();
console.log(it.next().value); // 1
console.log(it.next().value); // 2
console.log(it.next().value); // `*foo()` starting  3
console.log(it.next().value); // 4
console.log(it.next().value); // `*foo()` finished  5

/*
How does the yield *foo() delegation work?

First, calling foo() creates an iterator exactly as we've already seen. Then, yield *
delegates/transfers the iterator instance control (of the present *bar() generator)
over to this other *foo() iterator.
So, the first two it.next() calls are controlling *bar(), , but when we make the third
it.next() call, now *foo() starts up, and we're controlling *foo() instead of *bar().
That's why it's called delegation -- *bar() delegated its iteration control to *foo().

As soon as the it iterator control exhausts the entire *foo() iterator, it automatically
returns to controlling *bar()
*/