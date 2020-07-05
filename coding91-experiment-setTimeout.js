function play() {
    setTimeout(function() {
        while(true) {
            console.log(`I'll never end!!`);
        }
    }, 2000)
}

function play2() {
    setTimeout(function() {
        console.log(`I ran after 2ms`)
    }, 2000)
}

function play3() {
    setTimeout(function() {
        console.log(`I ran after 3ms`)
    }, 3000)
}

play();
play2();
play3();