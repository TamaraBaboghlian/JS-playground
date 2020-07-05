function go(index, delay) {
    return new Promise((res, rej) => {
        setTimeout(()=> {
            res(`GO!!!! ${index}`);
            // console.log("Done", index);
        }, delay)
    })
}

function go2(index) {
    return new Promise((res, rej) => {
        setTimeout(()=> {
            res(`GO Two!!!! ${index}`);
            // console.log("Go Two", index);
        }, 100)
    })
}

async function callGo(index, delay) {
    const result = await go(index, delay);
    console.log(result);
}

async function callGo2(index) {
    const result = await go2(index);
    console.log(result);
}


callGo(1, 3000);
callGo(2, 2000);
callGo(3, 1000);

callGo2('A'),
callGo2('B');
callGo2('C');

