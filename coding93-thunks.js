/*
Thunk value is container of particular collection of state
Async thunk is a function that doesn't need to pass any arg to do its job
all I need is callback to pass and we get a value

What incrediblly Powerful in this pattern: 
From outside world we don't know nor do we have to care whether that value is immediately available or it may take
awhile to get that a value
*/

function addAsync(x, y, cb) {
    setTimeout(function(){
        cb(x + y);
    }, 1000)
}

var thunk = function(cb) {
    addAsync(10, 15, cb);
}

thunk(function(sum) {
    console.log(sum);
})
