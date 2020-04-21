/* 
We recall from "Run-to-completion" scenario
With normal JS functions, of course either foo() can run completely first, or
bar() can run completely first, but foo() cannot cannot interleave its individual
statements with bar().
So, there are only two possible outcomes to the preceding program.

However, with generators, clearly interleaving (even in the middle of statements!) 
is possible:
*/

var a = 1;
var b = 2;
function* foo() {
    a++;
    yield;
    b = b * a;
    a = (yield b) + 3;
}

function* bar() {
    b--;
    yield;
    a = (yield 8) + b;
    b = a * (yield 2);
}

/*
Depending on what respective order the iterators controlling *foo() and *bar()
called, the preceding program could produce several different results.
In other words, we can actually illustrate (in a sort of fake-ish way) the theoretical
"threaded race conditions" circumstances discussed in Chapter 1, by interleaving
the two generator interations over the same shared variables.
*/

/* 
First, let's make a helper called step(..) that controls an iterator: 
*/

function step(gen) {
    var it = gen();
    var last;
    return function () {
        // whatever is `yield`ed out, just
        // send it right back in the next time!
        last = it.next(last).value;
        // console.log(a);
        console.log(last);
    };
}

a = 1;
b = 2;

var s1 = step(foo);
var s2 = step(bar);

s1();
console.log(a, b);
s1();
console.log(a, b);
s1();
console.log(a, b);

s2();
console.log(a, b);
s2();
console.log(a, b);
s2();
console.log(a, b);
s2();
console.log(a, b); // 11 22

/*
now let's reset the variables AND mix up the
interleaving ordering and see how it changes the final values of a and b
*/
a = 1;
b = 2;
s1 = step(foo);
s2 = step(bar);
s2(); // b--;
s2(); // yield 8
s1(); // a++;
s2();
// a = 8 + b;
// yield 2
s1();
// b = b * a;
// yield b
s1(); // a = b + 3;
s2(); // b = a * 2;



console.log('NOW experimenting...');
var c = 1;
var d = 2;
function* baz() {
    c++;
    yield;
    d = yield 3 + c;
}

var it = baz();
it.next();
var val = it.next().value;
console.log(val)
val = it.next().value;
console.log(val);