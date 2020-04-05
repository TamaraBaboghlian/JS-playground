
function foo() {
    return "foo"
}

Promise.resolve(foo()).then(console.log)
