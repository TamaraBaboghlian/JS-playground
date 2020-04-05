// var p1 = new Promise(function (res, rej) {
//     res(42)
// })

// var p2 = Promise.resolve(p1)

// console.log(p1 === p2)

function delay(time) {
    return new Promise((resolve, rej) => {
        setTimeout(resolve, time)
    })
}

delay(100)
    .then(function step2() {
        console.log('Delay after 100 ms');
        return delay(200)
    })
    .then(function STEP3() {
        console.log("step 3 (after another 200ms)");
    })
    .then(function STEP4() {
        console.log("step 4 (next Job)");
        return delay(50);
    })
    .then(function STEP5() {
        console.log("step 5 (after another 50ms)");
    })

function go(time) {
    return new Promise((res, rej) => {
        setTimeout(res, time)
    })
}

go(100).then(function step1() {
    console.log(`Mek`)
    return go(1000)
}).then(() => console.log(`Erku`));

function Go() {
    return new Promise((resolve, rej) => {
        setTimeout(function () {
            console.log("Gogogo");
            resolve("Million");
        }, 5000);
    })
}

async function callGo() {
    const value = await Go();
    console.log(value);
}
callGo();