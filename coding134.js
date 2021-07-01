function go() {
    console.log(this.a)
}

obj = {
    a: 10,
    foo: go
}


setTimeout(() => {
    go.call(obj)
}, 3000);


setTimeout(obj.foo, 1000)

obj2 = {
    c: "hundred",
    foo: function () {
        console.log(this.c)
    }
}

obj2.foo()