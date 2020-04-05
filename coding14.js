const controller = (function () {
    var Expense = function (id, description, value) {
        this.id = id;
        this.description = description;
    };

    return {
        addExp: function (ID, des, val) {
            exp1 = new Expense(ID, des, val)
            return exp1
        }
    }
})()

var item = controller.addExp(1, "coffe", 200)
console.log(item)

function foo() {
    console.log("foo")
}

foo.prototype.add = function () {
    console.log("prototype add")
}

const goo = new foo()

goo.add()