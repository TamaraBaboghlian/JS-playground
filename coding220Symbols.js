const f = () => {
    console.log("hii")
}

console.log(typeof f)

console.log(f instanceof Object)

class CatalogItem {

    constructor(name, price) {
        this.name = name;
        this.price = price;
    }

    get total() {
        return this.price;
    }

    print() {
        console.log(`${this.name} $${this.price} `);
    }
}

catalogItem = new CatalogItem("cheese", 1000);

console.log(catalogItem.total);

console.log(typeof 5)

console.log(typeof "Hello");