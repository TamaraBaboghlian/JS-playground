

const normalizePort = function(val){
    const port = parseInt(val, 10);
  
    if (Number.isNaN(port)) {
      return val;
    }
    if (port >= 0) {
      return port;
    }
    return false;
  }

const val1 = normalizePort(8080);
const val2 = normalizePort("8989");
const val3 = normalizePort('hi');

console.log(val1, val2, val3);
console.log("bonjour")


const values = [
    {id: 3, name: "Tamara"}, {id:5, name: "Va"}
]

const v2 = JSON.stringify(values);

const v3 = JSON.parse(v2)

console.log(v3)


console.log(typeof ([1, 2, 3]));

console.log(values instanceof Array)
console.log(values instanceof Object)
console.log(typeof values)

function hi() {
  console.log("hello")
}

console.log(typeof hi)
console.log(hi instanceof Function)

const str = "Bonjorno";

console.log(typeof str);
console.log(str instanceof String)
