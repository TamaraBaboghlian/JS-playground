str = new String("Hello dear")
console.log(typeof str)


const obj = {
    a: 1,
    b: 10
}

obj.prototype.compute = function () {
    console.log("computing")
}

const newObj = object.create(obj)

console.log(newObj.compute())

const P = new Promise((res, rej) => {
    rej(new Error("Promise didn't succeed"))
})

P.then(function (result) {
    console.log(result)
}, function (err) {
    console.log(err)
})