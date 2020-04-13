console.log("A");
setTimeout(function () {
    console.log("B");
}, 0);
// theoretical "Job API"
schedule(function () {
    console.log("C");
    schedule(function () {
        console.log("D");
    });
});
/* You might expect this to print out A B C D, but instead it would print out
A C D B, because the Jobs happen at the end of the current event loop tick,
and the timer fires to schedule for the next event loop tick (if available!). */