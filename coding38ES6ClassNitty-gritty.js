class C {
    constructor() {
        // make sure to modify the shared state,
        // not set a shadowed property on the instances!
        // this.count++; makes shadowed instance
        C.prototype.count++;

        console.log(`Hello ${this.count}`);
    }

    print() {
        console.log(this.obj);
    }
}

// add a property for shared state directly to
// prototype object
C.prototype.count=0;

var c1 = new C();
var c2 = new C();

console.log(c1.count);
console.log(c2.count);

console.log(c1.count === c2.count); // make sure we updated the shared state

/*
NOTE!
The biggest problem here is that it betrays the class syntax by exposing (leakage!);
that is: .prototype as implementation detail.

But, we also still have the surprise gotcha that this.count++ would implicitly create a
separate shadowed .count property on both c1 and c2 objects, rather than updating shared state.
*/

// accidental shadowing
class A {
    constructor(id) {
        this.id = id;
    }

    id() {
        console.log(`id : ${this.id}`);
    }
}

var c3 = new A(10);
console.log(c3.id);
// c3.id();    // TypeError: c3.id is not a function