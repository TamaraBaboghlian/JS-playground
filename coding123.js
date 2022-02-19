const f = (function() {
    const val = 100;

    function foo(a) {
        console.log(val + a)
    }

    return {
        f1: foo
    }
})()

f.f1(200);

f.f1(400);

setTimeout(function () {
    console.log("HELLO")
}, 0);
 
console.log("Hiii");

while (true) {
    console.log("")
}

