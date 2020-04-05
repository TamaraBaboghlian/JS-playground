var a = 10;

function foo() {
    var a;
    console.log(a);
    a = 20;
    console.log(`foo a: ${a}`);
}

foo();
console.log(a);
foo();
console.log(a);

const arr = [1, 2, 3, 4];

arr.val = "heeey!!";

console.log(typeof foo);

var obj = {
    "hello all": "Tamaraaa",
    c: 5
}

console.log(obj.c);
console.log(obj["hello all"]);

console.log(arr);
console.log(arr.val);

