
const get_P = function(i) {

    return new Promise((res, rej) => {
        setTimeout(() => {
            res(`resolved from get_P ${i}`)
        }, i * 1000)

    });

}

const do_something = async function() {
    for (var i = 1; i < 10; i++) {
       Promise.resolve(new Promise((resolve, reject) => {
            setTimeout(()=>{
                console.log(`Resolved from do_something ${i}`)
            }, i * 1000)
        }))
}
console.log("hii")

}

do_something();

get_P(3).then(console.log);


