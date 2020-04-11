function foo(arg) {
    var jojo = 10;
    function add() {
        console.log(arg + jojo);
    }
    return add;
}

const first = foo(15);
first();

const second = foo(18);
second();

console.log(10 * 'a');

var arr1 = [5, 6, 7];
var arr2 = [8, 9, 10];

var arrAll = [...arr1, ...arr2];
console.log(arrAll);

arrNew = arr1.map(el => el = el * 10);

console.log(arrNew);
console.log(arr1);


for (let i = 0; i < 5; i++) {
    setTimeout(() => { console.log(i) }, 2000);
}

if (typeof k === "undefined") {
    console.log("K is falsy")
}



const str = "Parev cez";
console.log(str[2]);

arr3 = [6, 7, 8];

kk = arr3.push(70);

console.log(kk);
console.log(arr3);

console.log(arr3 === kk);


function boo(x) {
    x.push(4);
    x; // [1,2,3,4]
    // later
    x.length = 0; // empty existing array in-place
    x.push(4, 5, 6, 7);
    x; // [4,5,6,7]
}
console.log("=====================");

var a = [1, 2, 3];
// boo(a);
// console.log(a);

boo(a.slice());
console.log(a);

const aa = new String('abc');
const bb = "hello";

console.log(Object.prototype.toString.call(aa));
console.log(aa instanceof String);
console.log(typeof bb);

const value = String.prototype.toLowerCase("HELLLO");

console.log(value);

const numb = "8";
console.log(numb + "");