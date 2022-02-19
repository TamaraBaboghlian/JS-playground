const f = (function() {
    const val = 100;

    function foo(a) {
        console.log(val + a)
    }

    return {
        f1: foo
    }
})()

f.f1(200);

f.f1(400);

setTimeout(function () {
    console.log("HELLO")
}, 0);
 
console.log("Hiii");

while (true) {
    console.log("")
}
function foo() {
    console.log( this.a );
}
var obj2 = {
    a: 42,
    foo: foo };

var obj1 = {
    a: 2,
    obj2: obj2 };

obj1.obj2.foo();

