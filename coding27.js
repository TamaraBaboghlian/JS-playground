console.log(Number.MAX_VALUE);
console.log(3 > 2 >= 1);

42..toFixed(2);

console.log([] == ![]);

console.log(Number(undefined));
console.log(Number(null));

O1 = { name: "hello" };
O2 = Object.create(null);
O1new = O1 + "";
console.log(O1new);
// O2new = O2 + "";
// console.log(O2new); // typerr

a = [];
a.length = 3;
console.log(a[6]);