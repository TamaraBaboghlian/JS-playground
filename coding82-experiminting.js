function giveP(delay, value) {
    console.log(`I'll return after ${delay} holding value ${value}`);
    return new Promise((res, rej) => {
        setTimeout(() => {
            res(`I came after ${delay} seconds, have value ${value}`);
            console.log(`resolved after ${delay}`);
        }, delay)
    })
}

async function getP() {
    const val1 = await giveP(2000, "Lalalala");
    const val2 = await giveP(500, "tatatata"); // waits 2500ms to resolve
    const val3 = await giveP(0, "chachacha");  // waits 2500ms to resolve

    console.log(`val1: ${val1}`);
    console.log(`val3: ${val3}`);
    console.log(`val2: ${val2}`);

    giveP(3500, "Re").then(console.log);
    giveP(3000, "Do").then(console.log);

    // Most performant
    Promise.all([giveP(2000, 'mek'), giveP(1000, 'erku'), giveP(500, 'erek')]);

}

getP();