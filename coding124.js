arr = [{ id: 1, name: "Dila" }, { id: 2, name: "Vilen" }, { id: 3, name: "Ervi" }];

updatedArr = arr.map(
    element =>
    {
        element.id += 100;
        element.name += "IG"
        return element
    }
)

console.log(arr)
console.log(updatedArr)


arr2 = [1, 2, 3, 4, 5];

updatedArr2 = arr2.map(element => 
    element * 2
)
console.log(arr2);
console.log(updatedArr2)