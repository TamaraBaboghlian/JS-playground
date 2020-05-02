var Benchmark = require('benchmark');

Promise.First = function (prs) {
    return new Promise(function (res, rej) {
        prs.forEach(pr => {
            Promise.resolve(pr).then(result => res(result))
            // OR res(pr)
        });
    })
};

const pA = new Promise((res, rej) => {
    setTimeout(() => {
        res("First")
    }, 500);
});

const pB = new Promise((res, rej) => {
    setTimeout(() => {
        res("Second")
    }, 1000);
});

const pC = new Promise((res, rej) => {
    setTimeout(() => {
        res("Third")
    }, 1500);
});

Promise.First([pA, pB, pC]).then(result => console.log(result));

function givePromise(prom) {
    return new Promise((res, rej) => {
        Promise.resolve(prom).then(res)
        // OR res(prom)
    })
}

const myPromise = new Promise((res, rej) => {
    res(`Hurraaah!!`);
});

givePromise(myPromise).then(result => console.log(result));

var bench = new Benchmark(
    "foo test",
    givePromise,
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