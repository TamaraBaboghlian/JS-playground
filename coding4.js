function first() {
    console.log(`first`)
    throw new Error(`Errrrrr`)
}

function second() {
    console.log(`second`)
}

try {
    first()

} catch (err) {
    console.log(err)
}

second()