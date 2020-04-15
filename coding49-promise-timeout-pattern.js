// a utility for timing out a Promise
function timeoutPromise(delay) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            reject("Timed Out")
        }, delay)
    })
}

function foo(delay) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve("One million dollar!!!!!")
        }, delay)
    })
}

Promise.race([
    foo(1000),
    timeoutPromise(500)
])
    .then(function (value) {
        console.log(value);
    },
        function (err) {
            // either `foo()` rejected, or it just
            // didn't finish in time, so inspect
            // `err` to know which
            console.log(err)
        }
    );
