for (var i = 1; i <= 5; i++) {
    setTimeout(function timer() {
        console.log(i);
    }, 2);
}

for (var i = 1; i <= 5; i++) {
    (function () {
        var j = i
        setTimeout(function timer() {
            console.log(j);
        }, j * 1000);
    })(i);
}