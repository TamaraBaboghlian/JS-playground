function baz() {
    // call-stack is: `baz`
    // so, our call-site is in the global scope
    console.log( "baz" );
    a = 100
    bar(); // <-- call-site for `bar`
}
function bar() {
    // call-stack is: `baz` -> `bar`
    // so, our call-site is in `baz`
    console.log( "bar", this.a );
    b = 200
    foo(); // <-- call-site for `foo`
}
function foo() {
    // call-stack is: `baz` -> `bar` -> `foo`
    // so, our call-site is in `bar`
    console.log( "foo", this.b );
}
baz(); // <-- call-site for `baz`
