const obj = {
    name: "Valod"
}

function foo(a, b, c) {
    console.log(this.name, a, b, c);
}

foo.call(obj, 1, 2, 3);
const bound = foo.bind(obj, 100);
bound(5, 6);

args = ['a', 'b', 'c'];

foo.apply(obj, args);