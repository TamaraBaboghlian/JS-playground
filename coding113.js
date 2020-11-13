const obj1 = {val1: 1, val2: 2};
const obj2 = {val3:3, val4:4, val5:5};

const obj3 = {...obj1, ...obj2};

console.log(JSON.stringify(obj3));

const obj4 = {obj1, obj2};

console.log(JSON.stringify(obj4));

console.log(obj4.obj2.val5);

function logTheDateLater() {
    var date = new Date();

    function logDate() {
        console.log(date);
    }

    setTimeout(logDate, 1000);
}

logTheDateLater();


// Rest and spread operators can be used for arrays slice and contact

//slice
const [ first, second, ...rest ] = [0, 1, 2, 3, 4, 5, 6]
console.log(first, second, rest)

//concat
const others = [1, 2, 3, 4]
const arr = [1, 2, ...others]
console.log(arr);