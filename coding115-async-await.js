async function read() {
    return ["Tamara", "Rafo", "Varia", "Hovig", "Jojo"]
}

async function concat(arr) {
    const newNames= []
    for (let i=0; i<arr.length; i++) {
        newNames[i] = arr[i] + " New";
    }
    // console.log(newNames);
    return newNames
}

const P = new Promise((res)=> {
    setTimeout(()=>{res("I've came from pure promise")}, 1000);
})

P.then(console.log)
read().then(names=> concat(names)).then(console.log);
