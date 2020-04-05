function Foo(name) {
    console.log(this.name)
}

function boo() {
    return this.id;
}

var a = new Foo()

console.log(Object.getPrototypeOf(a) === Foo.prototype)

Foo.prototype.say = function () {
    console.log("helloooo Bonjour!!")
}

var b = new Foo()
var c = new Foo()

b.say()
c.say()

const objjj = {
    id: "Vanii"
}

console.log(boo.call(objjj));