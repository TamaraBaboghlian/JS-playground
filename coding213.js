function giveP(val) {
    return new Promise((res, rej) => {
        setTimeout(() => {
            res(val)
        }, 1000)
    })
}

for (let i=0; i < 10; i++) {
    giveP(i).then(console.log)
}