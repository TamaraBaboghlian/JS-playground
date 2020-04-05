/* function Go() {
    return new Promise((resolve, rej) => {
        setTimeout(function () {
            console.log("Gogogo");
            resolve("Million");
        }, 5000);
    })
}

const p10 = Go().then(console.log); */

const p1 = new Promise((res, rej) => {
    setTimeout(() => {
        console.log('resolving 1...');
        res('One: Bonjour!!');
        console.log('**********************');
    }, 2000);
});

const p2 = new Promise((res, rej) => {
    setTimeout(() => {
        console.log('resolving 2...');
        res('Two: Parev!!');
        console.log('+++++++++++++++++++++');
    }, 3000);
});

const p3 = new Promise((res, rej) => {
    setTimeout(() => {
        console.log('resolving 3...');
        res('Three: Hellooo!!');
        console.log('====================');
    }, 1000);
})

const pArr = [p1, p2, p3];

for (var i = 0; i < pArr.length; i++) {
    pArr[i].then(console.log);
}