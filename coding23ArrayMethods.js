const obj = [{ id: 1, name: "Tamara" }, { id: 2, name: "Talar" }, { id: 3, name: "Viko" }, { id: 4, name: "Tina" }]

const found = obj.find(el => { console.log("finding..."); return el.id > 3 });

console.log(found);

console.log(obj.indexOf(found));

const arr = [1, 2, 3, 4];

newArr = arr.map(el => el = el * 10);
console.log(newArr);
console.log(arr);

const fArr = obj.filter(el => el.id < 3);
console.log(fArr);

const monArr = new Array(2, 3, 4, 5);
console.log(monArr);