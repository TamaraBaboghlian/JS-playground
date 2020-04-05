var a = new String("abc");
var b = new Number(42);
var c = new Boolean(true);
a.valueOf(); // "abc"
b.valueOf(); // 42
c.valueOf(); // true


class myClass {
    constructor(width, height) {
        this.width = width;
        this.height = height
    }
    foo() {

        var a = 2;
        this.bar();
    }
    bar() {
        console.log("inside funcion foo")
        console.log(this.a);
    }
    getValues() {
        console.log(this.width, this.height)
    }
}

obj = new myClass(10, 20);
obj.foo();
obj.getValues();

function joo(a, b) {
    this.a = a;
    this.b = b;

    const api = {
        fname: this.a,
        lname: this.b
    }

    return api;
}

myObj = new joo("Tamara", "Baboghlian");
console.log(myObj);

function boo(number, cb) {
    cb(number)
}

var n = 90
boo(n, function (n) {
    console.log(n)
})

var myObject = {};
Object.defineProperty(myObject, "a", {
    value: [1, 2, 3],
    writable: false, // not writable!
    configurable: true,
    enumerable: true
});
myObject.a[0] = 100;
// myObject.a; // 2

console.log(myObject.a)

var newObject = Object.create(myObject);

console.log(newObject.a);