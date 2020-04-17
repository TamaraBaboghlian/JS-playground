/* 
Promise.race([ .. ])
sometimes you only want to respond to the "first Promise to cross the
finish line," letting the other Promises fall away.

This pattern is classically called a "latch," but in Promises it's called a "race."
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

const p5 = new Promise((res, rej) => {
    setTimeout(() => {
        rej("Ooops!!!!!");
    }, 2000);
});

Promise.race([p1, p2, p3, p4])
    .then(console.log)
    .catch(err => console.log(`**1** Promise race: ${err}`));

/*
Similar to Promise.all([ .. ]), Promise.race([ .. ]) will fulfill if and when any Promise
resolution is a fulfillment, and it will reject if and when any Promise resolution is a rejection.
*/

Promise.race([p1, p2, p5])
    .then(console.log)
    .catch(err => `**2** Promise race: ${err}`)

/*
The promise that resolves first (eirther fulled or rejected) becomes the result of main promise.
*/
