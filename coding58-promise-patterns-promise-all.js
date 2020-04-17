/* Promise.all([ .. ]) */

/* 
READ!
In classic programming terminology, a "gate" is a mechanism that waits on two or more
parallel/concurrent tasks to complete before continuing. It doesn't matter what order they
finish in, just that all of them have to complete for the gate to open and let the flow control
through.

In the Promise API, we call this pattern  all([ .. ]) 
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
    }, 3000);
});


/* 
The main promise returned from Promise.all([...]) will only be fulfilled if and when all its
constituent promises are fulfilled.
*/
Promise.all([p1, p2, p3]).then(console.log).catch(err => console.log(`Rej*** ${err}`));

/* 
If any one of those promises instead is rejected, the main Promise.all([ .. ])
promise is immediately rejected, discarding all results from any other promises.
 */

Promise.all([p1, p2, p3, p4]).then(console.log).catch(err => console.log(`Rej*** ${err}`));
