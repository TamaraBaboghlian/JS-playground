/* 
We can even catch the same err that we throw(..) into the generator, essentially giving
the generator a chance to handle it but if it doesn't, the iterator code must handle it:
*/

function* main() {
    // try {
    var x = yield "Hello World";
    // never gets here
    console.log(x);
    // } catch (err) {
    //     console.log("Generator caught the err!!")
    // }
}

var it = main();

it.next();

try {
    // will `*main()` handle this error? we'll see!
    it.throw("Oops");
}
catch (err) {
    // nope, didn't handle it!
    console.error(err);         // Oops
}