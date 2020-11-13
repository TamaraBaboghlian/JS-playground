function go(a, b, c) {
  console.log(arguments[2]);
}

go(this, 1, 2, 3);

const obj = {
  id: "awesome",
};

function foo(element) {
  console.log(element, this.id);
}

[1, 2, 3].forEach(foo, obj);

for (var i = 0; i < 10; i++) {
  (function (j) {
    setTimeout(function () {
      console.log(`After time out ${j}`);
    }, i * 100);
  })(i);
}
