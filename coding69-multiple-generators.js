function* foo() {
    var x = yield 2;
    z++;
    var y = yield (x * z);
    console.log(x, y, z);
}

var z = 1;

var it1 = foo();
var it2 = foo();

var val1 = it1.next().value;             // 2
var val2 = it2.next().value;             // 2
console.log(val1);
console.log(val2);

val1 = it1.next(val2 * 10).value;          // 40
val2 = it2.next(val1 * 5).value;          // 600

it1.next(val2 / 2);       // y:300  
it2.next(val1 / 4);       // y:10

function* boo() {
    var b = yield 7;
    var z = 20;
    console.log(`b: ${b}`);
    var c = (yield z) + 10;
    console.log(`c: ${c}`);
}

var it = boo();
var ans = it.next();
console.log(ans);
ans = it.next(10).value;
console.log(ans);
it.next(100);
console.log(it.next())