

class C {
    constructor() {
        this.num = Math.random();
    }

    render() {
        console.log(`Random number is ${this.num}`)
    }
}

const c1 = new C();
c1.render();

C.prototype.render = function () {
    console.log(`Updated render ${Math.round(this.num * 1000)}`);
}

const c2 = new C();
c2.render();

c1.render();  // "Random: 432" -- oops!!!

/*
NOTE!
class is actually copying definitions statically at declaration time the way it does
in class-oriented languages.
If you change/replace a method (on purpose or by accident) on the parent "class", the child "class"
and/or instances will still be "affected", in that they didn't get copies at declaration time,
they are all still using the live-delegation model based on [[prototype]]:
*/