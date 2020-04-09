function foo() {
    console.log(this.a);
}

var obj = {
    a: 2,
    foo: foo
}

var bar = obj.foo;

// Even though bar appears to be a reference to obj.foo, in fact, it's really another reference to foo itself
bar(); //defaut binding

// The more subtle, more common, and more unexpected way this occurs is when we consider
// passing a callback function

function doFoo(fn) {
    fn();
}

// Parameter passing is just an implicit assignment, and since we're passing a function, it's an
// implicit reference assignment, so the end result is the same as the previous snippet.

doFoo(obj.foo);

// if the function you're passing your callback to is not your own, but built-in to the
// language? No difference, same outcome.
setTimeout(obj.foo, 1000);

function boo() {
    console.log(this.b);
};

var obj1 = {
    val: 5,
    boo: function () {
        console.log(this.val);
    }
}

setTimeout(obj1.boo, 1000); // undefined

function joo() {
    obj1.boo.call(obj1);
}

setTimeout(joo, 2000); //5