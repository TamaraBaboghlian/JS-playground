// const p1 = new Promise((res, rej) => {
//     rej(new Error(`Rej: bcz Err happened`));
// });

// function foo() {
//     p1.then(console.log).catch((err) => new Error(err));
//     console.log("new code");
// }

function boo() {
    throw new Error("Err in Boo")
}

try {
    boo();
} catch (err) {
    console.log(`err caught`)
}

console.log(`continue`);
