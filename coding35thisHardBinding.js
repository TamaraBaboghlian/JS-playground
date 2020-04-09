function foo() {
    console.log(this.a);
}

var obj = {
    a: 2,
    joo: foo
}

var bar = function () {
    foo.call(obj);
};

bar();

setTimeout(bar, 100);

/* Let's examine how this variation works. We create a function bar(), which, internally,
manually calls with foo.call(obj), thereby forcibly invoking foo with obj binding for this.
no matter how you later invoke bar, it will always invoke foo with obj.
In this case, This binding is both explicit and strong, so we call it hard binding.
*/

/* Since hard binding is such a common pattern, it's provided with a built-in utility as of ES5:
Function.prototype.bind
, and it's used like this: */

function foo2(something) {
    console.log(this.a, something);
    return this.a + something;
}

var bar = foo2.bind(obj);
var b = bar(3);
console.log(b);