/* Both function declarations and variable declarations are hoisted. But a subtle detail 
(that can show up in code with multiple "duplicate" declarations) is that functions are 
hoisted first, and then variables. */

foo(); // 1
var foo;

function foo() {
    console.log(1);
}

foo = function () {
    console.log(2);
};

foo();
console.log(foo instanceof Object);

const date = new Date();
console.log(date);
console.log(typeof date);
