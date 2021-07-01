/**
 * What's the difference between:
 *  setTimeout(callback, 0) AND process.nextTick(callback) AND setImmediate(callback)?

At first glance appears that all three functions do the same thing, but before anything else. 
The question: why are there three different functions? Let's experiment:

 */
const a = setImmediate(() => {
    console.log("SET IMMEDIATE")
})
  
process.nextTick(() => {
    console.log("PROCESS NEXT TICK")
})

setTimeout(() => {
    console.log("SET TIME OUT")
}, 0)

/**
 * We see that those three functions are executed in different stages of event loop.
 * 
 */




