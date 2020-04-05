function now() {
    return 21
}

function later() {
    answer = answer * 2
    console.log(`the meaning of life is: ${answer}`)

}

var answer = now()
setTimeout(later, 2000)

var obj = {
    a: 100
}

console.log(obj.a)

obj.a++
console.log(obj)
