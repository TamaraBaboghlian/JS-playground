const arr = [{ id: 1, name: "Tali" }, { id: 2, name: "nana" }];

const newArr = [...arr, { id: 3, name: "Gogo" }]; // ... creates brand new array

const arr2 = arr;

console.log(arr);
console.log(newArr);

arr[0] = { id: 100, name: "Talio" };

console.log(arr);
console.log(newArr);

arr.push({ id: 6, name: 'papa' });
console.log(arr);

const x = "10";
const y = "9";
console.log(x < y);
/* 
Splice: 
Array.prototype.splice() method changes the contents of an array by removing 
or replacing existing 
*/

const months = ["Jan", "March", "April", "June"];
months.splice(1, 0, "Feb");
console.log(months);

const deleted = months.splice(4, 1, "May");
console.log(months);
console.log(`deleted item(s): ${deleted}`);

let myFish = ["angel", "clown", "mandarin", "sturgeon"];

myFish.splice(1, 0, "funny", "nanny");
console.log(myFish);

myFish.splice(3, 2, "Jojo", "gdzoo bibar", "drum");
console.log(myFish);

