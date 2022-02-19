arr = [{ id: 1, name: "Dila" }, { id: 2, name: "Vilen" }, { id: 3, name: "Ervi" }];

updatedArr = arr.map(
    element =>
    {
        element.id += 100;
        element.name += "IG"
        return element
    }
)

console.log(arr)
console.log(updatedArr)


arr2 = [1, 2, 3, 4, 5];

updatedArr2 = arr2.map(element => 
    element * 2
)
console.log(arr2);
console.log(updatedArr2)
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
