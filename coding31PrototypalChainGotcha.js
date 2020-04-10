var anotherObject = {
    a: 2
};

var myObject = Object.create(anotherObject);

console.log(anotherObject.a); //2
console.log(myObject.a);  //2

console.log(anotherObject.hasOwnProperty("a")); //true
console.log(myObject.hasOwnProperty("a")); //false

myObject.a++;

console.log(myObject.a); //3, Oops!
console.log(anotherObject.a); //2

console.log(myObject.hasOwnProperty("a")); //true, Oops!
console.log(anotherObject.hasOwnProperty("a")); //true

/*
NOTE!
Though it may appear that myObject.a++ should(via delegation) look-up and just increment
the anotherObject.a property itself in place, instead the ++ operation corresponds to:
myObject.a = myObject.a + 1.
The result is: [[GET]] looking up "a" property via [[prototype]] to get the current value 2
from anotherObject.a, incrementing the value by one, then [[PUT]] assigning the 3 value
to a new shadowed property a on myObject. Oops!

Be very careful when dealing with delegated properties that you modify. If you wanted to
increment anotherObject.a, the only proper way is anotherObject.a++
*/