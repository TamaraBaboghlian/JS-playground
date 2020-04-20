setTimeout(function () {
    console.log("SetTimeout One");
}, 0)

var p = Promise.resolve(21);

p
    .then(function (v) {
        console.log(v);
        // 21
        // fulfill the chained promise with value `42`
        return v * 2;
    })
    // here's the chained promise
    .then(function (v) {
        console.log(v);
        // 42
    });

setTimeout(function () {
    console.log("SetTimeout TWO");
}, 0)

var p2 = Promise.resolve(10);
p2
    .then(function (v) {
        console.log(v);
        // 21
        // fulfill the chained promise with value `42`
        return new Promise((res, rej) => {
            setTimeout(function () {
                res("I caaaaame");
            }, 3000);
        })
        // return v * 2;
    })
    // here's the chained promise
    .then(function (v) {
        console.log(v);
        // 42
    });

p.then(console.log(`**2** P resolved`));

setTimeout(function () {
    console.log("Plain SetTimeout");
}, 0)

/*
conclusion:
It's clear that promises run before timeout!!
*/

const pA = Promise.resolve("Onze");
const pB = Promise.resolve(pA);
const pC = Promise.resolve(pB);

console.log(pA === pC)

pC.then(console.log)