class Distributor {
  constructor() {
    this.products = {
    };
  }
  addProduct(id, name) {
    this.products[id] = name;
  }
  removeProduct(id) {
    delete this.products[id];
  }
}
class MyProduct {
  constructor(name) {
    this.name = name
    this.id = Symbol(name);
  }
  distribute(distributor) {
    distributor.addProduct(this.id, this.name);
  }
}

const localDistributor = new Distributor();


const product1 = new MyProduct('butter');
product1.distribute(localDistributor)
console.log(localDistributor.products);
console.log(localDistributor.products);
localDistributor.removeProduct(product1.id);
console.log(localDistributor.products);