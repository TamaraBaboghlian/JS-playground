/* 
array a in this snippet is iterable. the for..of loop automatically calls its Symbol.iterator function
to construct an iterator. But we could of course call the function
manually, and use the iterator it returns:
*/
var a = [1, 3, 5, 7, 9];
var itr = a[Symbol.iterator]();

console.log(itr.next().value);
console.log(itr.next().value);
console.log(itr.next().value);
console.log(itr.next().value);
console.log(itr.next().value);

