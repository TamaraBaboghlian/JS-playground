function go(index) {
    return new Promise((res, rej) => {
        setTimeout(()=> {
            res(`DONE!!!! ${index}`);
            console.log("Done", index);
        }, 200)
    })
}

function go2(index) {
    return new Promise((res, rej) => {
        setTimeout(()=> {
            res(`GO Two!!!! ${index}`);
            console.log("Done", index);
        }, 100)
    })
}



go("Yeah").then(console.log)
async function callGo(index) {
    const result = await go(index);
    console.log(result);
}

function goSync(letter) {
    console.log(`goSynce ${letter}`);
}

callGo(1);
callGo(2);
callGo(3);
callGo(4);
callGo(5);
go2(100);
go2(200);
go2(300);
go(1);
go(2);
go(3);
go(4);
go(5);

goSync("A");
goSync("B");
goSync("C")

