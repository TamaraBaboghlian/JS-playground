// Currying is a process in functional programming in which we can transform a function with multiple
// arguments into a sequence of nesting functions. It returns a new function that expects the next 
// argument inline.
// It keeps returning a new function (that expects the current argument, like we said earlier) 
// until all the arguments are exhausted. The arguments are kept "alive"(via closure) and all 
// are used in execution when the final function in the currying chain is returned and executed.

function multiply(a) {
    return (b) => {
        return (c) => {
            return a * b * c
        }
    }
}

console.log(multiply(2)(3)(4));

// We could separate this multiply(1)(2)(3) to understand it better:

const mul1 = multiply(2);
const mul2 = mul1(3);
const mul3 = mul2(4);

console.log(mul3);
