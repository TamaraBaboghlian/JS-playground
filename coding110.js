var p1 = new Promise((res, rej) => {
  setTimeout(function () {
    res("Hi");
  }, 3000);
});

var p2 = new Promise((res, rej) => {
  setTimeout(function () {
    res("How are you");
  }, 2000);
});

var p3 = new Promise((res, rej) => {
  setTimeout(function () {
    res("doing?");
  }, 1000);
});

var p = [p1, p2, p3];

p.forEach((p) => p.then(console.log));
