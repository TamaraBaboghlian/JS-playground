listen("click", function handler(evt) {
    setTimeout(function request() {
        ajax("http://some.url.1", function response(text) {
            if (text == "hello") {
                handler();
            }
            else if (text == "world") {
                request();
            }
        });
    }, 500);
});

/*
This kind of code is often called "callback hell," and sometimes also referred to as the
"pyramid of doom" (for its sideways-facing triangular shape due to the nested indentation).
*/

/* 
let me rewrite the previous nested event/timeout/Ajax example without using nesting:
*/
listen("click", handler);
function handler() {
    setTimeout(request, 500);
}
function request() {
    ajax("http://some.url.1", response);
}
function response(text) {
    if (text == "hello") {
        handler();
    }
    else if (text == "world") {
        request();
    }
}