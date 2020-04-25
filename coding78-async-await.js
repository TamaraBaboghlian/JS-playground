function foo(x, y) {
    return new Promise((res, rej) => {
        res(`I keep my promise ${x + y}`);
    })
}

async function main() {
    const value = await foo(1, 7);
    console.log(value)
}

main()