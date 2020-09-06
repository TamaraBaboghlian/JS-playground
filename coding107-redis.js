function Query(collectionName) {
  this.collectionName = collectionName;
}

Query.prototype.exec = function () {
  console.log("Executing query: ", this.collectionName);
  console.log("Now printing args: ", arguments);
};

myQuery = new Query("USERS");
myQuery.exec();

const exec = Query.prototype.exec;

Query.prototype.exec = function () {
  exec.apply(this, 2, 5, 7);
  console.log("Executing overloaded EXEC");
};

monQuery = new Query("BLOGS");
monQuery.exec();

let arr = [1, 2, 3];
let arr2 = arr;
arr.push(100);

console.log(arr);
console.log(arr2);
