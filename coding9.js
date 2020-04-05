var fulfilledTh = {
    then: function (cb) {
        cb(42)
    }
}

var rejectedTh = {
    then: function (cb, errcb) {
        errcb('oops')
    }
}

var p1 = Promise.resolve(fulfilledTh)

var p1 = Promise.resolve(rejectedTh)