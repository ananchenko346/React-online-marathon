const product = function () {
  return [].reduce.call(arguments, function (res, elem) {
    return res * elem;
  }, this.product);
};

const contextObj = { product: 10 };

const getProduct = (...arg) => {
  return product.call(contextObj, 2, 3, ...arg);
};

console.log(getProduct(4, 5));
console.log(getProduct(6, 7));
console.log(getProduct(0, 7));
console.log(getProduct(6, 0));
console.log(getProduct(-5, 5));