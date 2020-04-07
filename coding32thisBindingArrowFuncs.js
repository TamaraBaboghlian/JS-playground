function foo() {
    return (a) => {
        console.log(this.a);
    }
}

var obj1 = {
    a: 2
}

var obj2 = {
    a: 3
}

var bar = foo.call(obj1);
bar.call(obj2)

/*
The arrow-function created in foo() lexically captures whatever foo()'s this at call-time.
Since foo() was this -bound to obj1, bar which is reference to returned arrow-function
will also be this-bound to obj1.
*/



function boo() {
    setTimeout(() => {
        // `this` here is lexically adopted from `boo()`
        console.log(this.a);
    }, 100)
}

var obj = {
    a: 100
}

boo.call(obj)