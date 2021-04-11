function foo() {
    setTimeout(() => {
        // `this` here is lexically adopted from `foo()`
        console.log( this.a );
    },100);
}
var obj = { a: 2
};

foo.call( obj ); // 2

