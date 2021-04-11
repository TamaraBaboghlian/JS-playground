const obj1 = {
    a: 1, b:2, c: {
        d:10
    }
}

obj2 = Object.assign({}, obj1)

obj1.c.d = 100;

console.log(obj1.c.d);

console.log(obj2.c.d);


obj3 = JSON.parse(JSON.stringify(obj1));

console.log(obj3);

obj1.c.d = 200;
console.log(obj3.c.d);

console.log(obj1.c.d);


console.log(`
 Second TEST
`)
obj4 = {
    a: "A",
    b: [1, 2, 3, 4, 5]
}

obj5 = Object.assign({}, obj4);

obj4.b[0] = "Hi";
console.log(obj5.b[0]);

obj6 = JSON.parse(JSON.stringify(obj4));

obj4.b[0] = "Bonjour";
console.log(obj6.b[0]);


obj7 = {
    get a() {
        return 10;
    }

}

console.log(obj7.a)

obj7.a = 20;

console.log(obj7.a);