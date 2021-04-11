function Student(name, id, info) {
    this.name = name;
    this.id = id;
    this.info = info
}

function studentSchema(name, id, info) {
    return new Student(name, id, info)
}

Student.prototype.getInfo = function() {
    console.log(this.info)
}

Student.prototype.do = function() {
    console.log('From Do');
    this.getInfo();
}

// const std = {
//     name: "Tamara",
//     id: 1,
//     info: "Tamar is violinist"
// };

// Student.call(std);

// const std2 = {
//     name: "Vilen",
//     id: 2
// }

const std3 = new studentSchema("Titiz", 100, "violinist");

std3.do();






