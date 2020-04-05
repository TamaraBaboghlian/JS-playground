function sayHello(name) {
    return `Hello ${name} how are you??`;
}

function speak(say, name) {
    console.log(say(name));
}

speak(sayHello, "Tamar");

foo();

function foo() {
    console.log("I am function")
}
