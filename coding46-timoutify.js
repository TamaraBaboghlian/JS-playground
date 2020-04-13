/* What about the trust issue of never being callback called? If this is a concern 
(and it probably should be!), you likely will need to set up a timeout that cancels the event.
You could make a utility (proof-of-concept only shown) to help you with that: */

function timoutify(fn, delay) {
    var intv = setTimeout(function name(params) {
        intv = null;
        throw new Error("Timeoutify!!");
    }, delay);

    return function () {
        if (intv) {
            clearTimeout(intv);
            fn.apply(this, [null].concat([].slice.call(arguments)));
        }
    }
}


// Here's how you use it:
function foo(err, data) {
    if (err) {
        console.error(err);
    }
    else {
        console.log(data);
    }
}

ajax("http://some.url.1", timeoutify(foo, 500));