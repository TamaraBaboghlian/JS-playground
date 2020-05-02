const p = new Promise((res, rej) => {
    setTimeout(() => {
        res(`I came from promise`)
    }, 0)
});

const p1 = setTimeout(() => {
    console.log(`I came from time out`);
}, 0);


Promise.resolve(p).then(console.log);

const p2 = Promise.resolve(p);
console.log(p2 === p);

const pA = new Promise((res, rej) => {
    setTimeout(() => {
        rej("First")
    }, 500);
});

const pB = new Promise((res, rej) => {
    setTimeout(() => {
        rej("Second")
    }, 1000);
});

const pC = new Promise((res, rej) => {
    setTimeout(() => {
        rej("Third")
    }, 1500);
});

Promise.race([pA, pB, pC]).then().catch(console.log)
