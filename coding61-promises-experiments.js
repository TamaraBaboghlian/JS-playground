const p1 = new Promise((res, rej) => {
    setTimeout(() => {
        res("hiii");
    }, 500);
});

const p2 = new Promise((res, rej) => {
    setTimeout(() => {
        res("pareeev");
    }, 1000);
});

const p3 = new Promise((res, rej) => {
    setTimeout(() => {
        res("saluuut");
    }, 1500);
});

const p4 = new Promise((res, rej) => {
    setTimeout(() => {
        rej("marhabaaa");
    }, 100);
});

prs = [p1, p2, p3, p4];

// resolving first fulfilled promise and silently ignore the rejected
function go(proms) {
    return new Promise((res, rej) => {
        proms.forEach(el => {
            el.then(res)
        });
    })
}
go(prs).then(console.log)