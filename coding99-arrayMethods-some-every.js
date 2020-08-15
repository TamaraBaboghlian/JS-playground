/* 
The every() method tests whether all elements in the array pass the test implemented by the provided function.
It returns a Boolean value.
*/

const isBelowThreshold = (currentValue) => currentValue < 40;

const arr = [1, 35, 7, 27, 35, 12];

console.log(arr.every(isBelowThreshold)); // true

/* 
The some() method tests whether at least one element in the array passes the test implemented by the provided function.
It returns a Boolean value.
*/
const isEven = (curVal) => curVal % 2 === 0;

console.log(arr.some(isEven)); // true
