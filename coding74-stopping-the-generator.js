/*
In the previous example, it would appear the iterator instance for the *something()
generator was basically left in a suspended state forever after the break in the loop was called.
But there's a hidden behavior that takes care of that for you. "Abnormal completion" (i.e.,
"early termination") of for..of loop--generally caused by break, return or and uncaught exception
-- sends a signal to the generator's iterator for it to terminate.

Note: Technically, the for..of loop also sends this signal to the iterator at the normal
completion of the loop. For a generator, that's essentially a moot operation, as the
generator's iterator had to complete first so the for..of loop completed.

while a for..of loop will automatically send this signal, you may wish to send the signal
manually to an iterator; you do this by calling return(..).

If you specify a try..finally clause inside the generator, it will always be run even when
the generator is externally completed. This is useful if you need to clean up resources
(database connections, etc.):
*/
function* something() {
    try {
        var nextVal;
        while (true) {
            if (nextVal === undefined) {
                nextVal = 1;
            }
            else {
                nextVal = (3 * nextVal) + 6;
            }
            yield nextVal;
        }
    }
    // cleanup clause
    finally {
        console.log("cleaning up!");
    }
}

/* 
the following for loop of generator will trigger "finally" clause.
*/

for (var v of something()) {
    console.log(v);
    // don't let the loop run forever!
    if (v > 1000)
        break;
}

/*
you could instead manually terminate the generator's iterator instance from the outside with return(..)
*/

var it = something();
for (var v of it) {
    console.log(v);
    // don't let the loop run forever!
    if (v > 500) {
        console.log(
            // complete the generator's iterator
            it.return("Hello World").value
        );
        // no `break` needed here
    }
}

/*
When we call it.return(..), it immediately terminates the generator, which of course runs
the finally clause. Also, it sets the returned value to whatever you passed in to return(..),
which is how "Hello World" comes right back out.
We also don't need to include a break now because the generator's iterator is set to done:true,
so the for..of loop will terminate on its next iteration.
*/

