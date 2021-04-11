// function foo() {
//     console.log( this.a );
// }
// var obj = {
//     a: 2,
//     foo: foo };
//
// var bar = obj.foo;
// var a = "oops, global";
// bar(); //

// function foo() {
//     console.log( this.a );
// }
// var obj = {
//     a: 2,
//     foo: foo };
//
// var a = "oops, global"; // `a` also property on global object
//
// setTimeout( obj.foo, 100 ); // "oops, global"
//
// obj.foo()

function foo(el) {
    console.log( el, this.id );
}
var obj = {
    id: "awesome"
};

// use `obj` as `this` for `foo(..)` calls
[1, 2, 3].forEach( foo, obj ); // 1 awesome  2 awesome  3 awesome
