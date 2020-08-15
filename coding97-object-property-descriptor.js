var myObject = {
  a: 2,
};

console.log(Object.getOwnPropertyDescriptor(myObject, "a"));

/*
As we see data descriptor or property descriptor is much more than its value.
It includes 3 other characteristics: writable, enumerable and configurable

we can use Object.defineProperty(..) to add new property or modify existing one(if its configurable)
*/

Object.defineProperty(myObject, "b", {
  value: "Parev",
  writable: false,
  configurable: true,
  enumerable: true,
});

myObject.b = "Hi";
console.log(myObject.b); // Parev

/*
As we can see our modification of b silently failed. If we try in strict mode, we get an err
*/

Object.defineProperty(myObject, "c", {
  value: 100,
  writable: true,
  configurable: false,
  enumerable: true,
});

myObject.c = 200;
console.log(myObject.c); // 200

// Object.defineProperty(myObject, "c", {
//     value: 100,
//     writable: true,
//     configurable: true,
//     enumerable: true,
//   });

/*
  Be carefull, we cannot modify configurable to true. we get typeErr, regardless of strict-mode(commented)
  giving configurable false is a one-way action and cannot be undone!

  There's a nuanced exception to be aware of: even if the property is configurable: false,
  writable can always be chaged from true to false without err but not to back.

  Another thing, configurable: false prevents the ability to use delete operator to remove existing property
  */

delete myObject.c;
console.log(myObject.c);

/*
  As we can see deleting c is failed silenty because we made c property non-configurable
  */

/* 
It's important to not that ALL of this approaches create shallow immutablity. That is, they only affect the object's direct property.
If an object has reference to another object(array, function, obj, etc), the contents of that object are not affected, and remain mutable
*/

/* 
Prevent extensions
if we want to prevent an object from having new properties added to it, we call Object.preventExtensions(..)
*/

var finalObj = {
  a: 8,
};

Object.preventExtensions(finalObj);

finalObj.b = 10;

console.log(finalObj.b); // undefined

/* 
Seal: if we call Object.seal(..), takes an existing object, it calls Object.preventExtensions() on it and also marks all its existing objects
as configurable:false
*/

Object.seal(finalObj);

Object.freeze(finalObj);
/* 
Freeze: creates frozen object, it takes object and Object.seal(..) on it, also makes writable: false
Freeze-in an object is the highest level of immutability, as it prevents changes to the object and to any of its direct properties.
though reference values will remain unaffected
*/
