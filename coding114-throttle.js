function helloArmenia() {
    console.log('Bonjour Armenia');
}

function throttle(fn, milliseconds) {
    let lastCallTime;
   

    return function() {
        console.log(`last call time:    ${lastCallTime}`)
        console.log('*** throttle called ***');
        let nowTime = Date.now();
        if (!lastCallTime || lastCallTime < nowTime - milliseconds) {
            lastCallTime = nowTime;
            fn();
        }
    }
}

const helloArmeniaThrottled = throttle(helloArmenia, 1000);

setInterval(helloArmeniaThrottled, 10);

/*
The most interesting part is: despite the 10ms interval, calls to helloArmenia are throttled and "Bonjour Armenia" will only be logged once per second.
The magic of closure is speaking!!!
*/
