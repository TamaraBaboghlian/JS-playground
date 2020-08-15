/* 
Getters are properties which actually call a hidden function to retrieve a values
Setters are properties which actually call a hidden function to set a values
*/

var myObj = {
  get a() {
    return 2;
  },
};

console.log(myObj.a);

Object.defineProperty(myObj, "b", {
  get: function () {
    return this.a * 2;
  },
});

console.log(myObj.b);

/* 
In both cases we created property on the object that actually doesn't hold value, but whose access automatically results in hidden function call
to the getter function
*/

myObj.a = 100;

/* 
Since we only defined getter for a, if we try to set the value of a later, the set operation will not trow an error, but it will just throw the 
assignment away. Event if there's a valid setter our custom getter is hard-coded to return only 2, so the set operation would be on moot
*/

/* 
to make this scenario more sensible, properties should also be defined with setters, which override the default [[PUT]]
*/

var myObject = {
  // define getter for a
  get a() {
    return this._a_;
  },
  set a(val) {
    this._a_ = val * 2;
  },
};

myObject.a = 2;
console.log(myObject.a);

/* 
We almost certainly want to always declare both getter and setter. Having only one or the other often lead to unexpected/surprising behavior
*/
