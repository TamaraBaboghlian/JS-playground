function go(index, delay) {
    return new Promise((res, rej) => {
        setTimeout(()=> {
            res(`GO!!!! ${index}`);
            console.log("Done", index);
        }, delay)
    })
}

async function callGo() {
    const val1 = await go(1, 5000);
    const val2 = await go(2, 4000);
    const val3 = await go(3, 3000);
    const val4 = await go(4, 2000);
    const val5 = await go(5, 1000);
}
callGo()
