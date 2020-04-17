/*
While native ES6 Promises come with built-in Promise.all([ .. ]) and Promise.race([ ..])
, there are several other commonly used patterns with variations on those semantics:

Some Promise abstraction libraries provide these, but you could also define them yourself
using the mechanics of Promises, race([ .. ]) and all([ .. ]).

For example, here's how we could define first([ .. ]),
whicht ignores any rejections and fulfills as soon as the first Promise fulfills.
*/

Promise.first = function (prs) {
    return new Promise(function (resolve, reject) {
        // loop through all promises
        prs.forEach(function (pr) {
            // normalize the value
            Promise.resolve(pr)
                // whichever one fulfills first wins, and
                // gets to resolve the main promise
                .then(resolve);
        });
    });
};

/* 
This implementation of first(..) does not reject if all its promises reject;
it simply hangs.
*/
const p1 = new Promise((res, rej) => {
    setTimeout(() => {
        res("I'm the winner")
    }, 1000);
});

const p2 = new Promise((res, rej) => {
    setTimeout(() => {
        res("I'm the second")
    }, 2000);
});

const p3 = new Promise((res, rej) => {
    setTimeout(() => {
        res("I'm the latest");
    }, 3000);
});

const p4 = new Promise((res, rej) => {
    setTimeout(() => {
        rej("Ooops!!!!!");
    }, 500);
});

// const p5 = new Promise((res, rej) => {
//     setTimeout(() => {
//         rej("Ooops!!!!!");
//     }, 2000);
// });



Promise.first([p1, p2, p3, p4]).then(console.log);