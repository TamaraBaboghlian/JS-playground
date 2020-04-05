var rejectedPr = new Promise(function (resolve, reject) {
    // resolve this promise with a rejected promise
    resolve(Promise.reject("Oops"));
});
rejectedPr.then(
    function fulfilled() {
        // never gets here
    },
    function rejected(err) {
        console.log(err);
        // "Oops"
    }
);

function donow(cb, language) {

    cb(language)
}

donow(function (lang) {
    console.log(`the language lang is`, `French`)
})


setTimeout(function () {
    console.log(`testing exception`)
    try {
        throw new Error(`Err from time callback`)
    }
    catch (err) {
        console.log(`err Catched`)
    }
}, 1000)