let sym1 = Symbol()
let sym2 = Symbol('foo')
let sym3 = Symbol('foo')

/**
 * The above code creates three new symbols. Note that Symbol("foo") does not coerce the string "foo" into a symbol. 
 * It creates a new symbol each time:
 */

console.log(sym2 === sym3)

const sym4 = Symbol('a')
/**
 * Creates a new Symbol object. It is incomplete as a constructor because it does not support the syntax "new Symbol()".
 */


 

// Symbol - keyed properties will be completely ignored when using JSON.stringify():

JSON.stringify({[Symbol('foo')]: 'foo'})
// '{}'


// Searches for existing symbols with the given key and returns it if found. Otherwise a new symbol gets created in the global symbol registry with key.


// The Object.getOwnPropertySymbols() method returns an array of all symbol properties found directly upon a given object.


// Symbol.for(key): Searches for existing symbols with the given key and returns it if found. Otherwise a new symbol gets created in the global symbol registry with key.
const object1 = {};
const a = Symbol('a');
const b = Symbol.for('b');


object1[a] = 'localSymbol';
object1[b] = 'globalSymbol';

const objectSymbols = Object.getOwnPropertySymbols(object1);

console.log(objectSymbols)

console.log(objectSymbols.length);
// expected output: 2
