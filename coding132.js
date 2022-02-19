const p1 = function giveP(val) {
    return new Promise((res, rej) => {
        setTimeout(() => {
            res(val)
        }, 1000)
    })
}

const p2 = function giveP2(val) {
    return new Promise((res, rej) => {
        setTimeout(() => {
            res(val)
        }, 2000)
    })
}

const p3 = function giveP3(val) {
    return new Promise((res, rej) => {
        setTimeout(() => {
            res(val)
        }, 3000)
    })
}

async function solution() {
    const result = await Promise.all([p1(100), p2(200), p3(300)])
    console.log(result);
}

solution()


