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