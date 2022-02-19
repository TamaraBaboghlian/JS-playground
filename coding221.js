const arr = [1, 2, 3, 5];

const arr2 = [...arr]

arr[0] = 100;

console.log(arr);
console.log(arr2)


function foo() {
    return new Promise((res, rej) => {
        setTimeout(() => {
            res('Resolved')
        }, 5000)
    })
}

async function callFoo() {
    const result = await foo();
    console.log(result)
}

function Go() {
   callFoo() 
}

Go()


const value = new Date().toISOString();
console.log(value)