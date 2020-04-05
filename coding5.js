const add = (function () {
    const val = 100;
    return {
        doOne: function () {
            console.log("one")
        },
        doTwo: function () {
            console.log("two")
        },
        doThree: function (number) {
            console.log(number)
        },
        doFour: function () {
            console.log(val)
        }
    }
})()

add.doOne()
add.doFour()

const obj = {
}

obj.prototype.say = function () {
    console.log('hello')
}

obj.say()