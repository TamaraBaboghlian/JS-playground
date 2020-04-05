var me = {
    name: "Kyle"
};
var you = {
    name: "Reader"
};

function identify() {
    console.log(this.name.toUpperCase());
    return this.name.toUpperCase();
}
function speak() {
    var greeting = "Hello, I'm " + identify.call(this);
    console.log(this);
    console.log(greeting);
}

identify.call(me); // KYLE
identify.call(you); // READER
speak.call(me); // Hello, I'm KYLE
speak.call(you); // Hello, I'm READER

const arr = [1, 2, 3, 4, 5, 6, 7];
arr.forEach(a => console.log(a * 10));
console.log(arr);

const valodik = {
    name: "Valodik",
    ff: identify
}

valodik.ff();
