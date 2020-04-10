class P {
    foo() {
        console.log("P.foo");
    }
}

class C extends P {
    foo() {
        // console.log("C.foo");
        super.foo();
    }
}

var c1 = new C();
c1.foo();


var D = {
    foo: function () {
        console.log("D.foo");
    }
}

var E = {
    foo: C.prototype.foo
};

// Link E to D for delegation
Object.setPrototypeOf(E, D);


E.foo(); // "P.foo"


/*
NOTE!
If you were thinking (quite reasonably!) that super would be bound dynamically at call-time,
you might expect that super() would automatically recognize that E delegates to D,
so E.foo() using super() should call to D.foo()

Not so. For performance pragmatism reasons, super is not late bound (aka, dynamically bound)
like `this` is. Instead it's derived at call-time from [[HomeObject]].[[Prototype]],
where [HomeObject]] is statically bound at creation time.

In this particular case, super() is still resolving to P.foo(), since method's
[[HomeObject]] is still c and c.[[Prototype]] is P.

*/
