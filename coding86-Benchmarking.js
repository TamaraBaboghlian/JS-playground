var Benchmark = require('benchmark');

function foo() {
    // operation(s) to test
    for (let i = 0; i < 100000000; i++) {
        console.log(`I came: ${i}`);
    }
}

var bench = new Benchmark(
    "foo test",
    foo,
    // test name
    // function to test (just contents)
    {
        // ..
        // optional extra options (see docs)
    }
);
console.log(bench.hz);
console.log(bench.stats.moe);
console.log(bench.stats.variance);
// number of operations per second
// margin of error
// variance across samples

console.log(`filling array`)
var x = [];
for (var i = 0; i < 10; i++) {
    x[i] = "x";
}
console.log(x)