function* foo(x, y) {
    console.log("Helloooo");
    return x * y;
}

var it = foo(6, 7);
var res = it.next();
console.log(res);
