function foo() {
    setTimeout(function () {
        bar.baz();
    }, 1000)
};

try {
    foo();
    // later throws global error from `baz.bar()`
}
catch (err) {
    // never gets here
}

// "error-first callback" style
function boo(cb) {
    setTimeout(function () {
        try {
            var x = baz.bar();
            cb(null, x); // success!
        }
        catch (err) {
            cb(err);
        }
    }, 1000);
}

boo(function (err, val) {
    if (err) {
        console.error(err); // bummer :(
    }
    else {
        console.log(val);
    }
});

/*
NOTE!!
The try..catch here works only from the perspective that the baz.bar() call will
either succeed or fail immediately, synchronously. if baz.bar() was itself its own async
completing function, any async errors inside it would not be catchable.
*/