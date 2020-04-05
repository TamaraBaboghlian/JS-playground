var p = Promise.resolve(42)
var p2 = new Promise((res, rej) => {
    res(100)
})

console.log(typeof p2 instanceof Promise)
console.log(p)
console.log(p2)

var obj = {
    a: 2
}

console.log(obj)

var pro = {
    then: function () {
        console.log('hello')
    }
}

pro.then(function (value) {
    console.log(value)
}).then(console.log(value))