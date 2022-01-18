const multiply = (a, b) => {
  return a * b;
};

function overloadedFunc(a = [1, 2, 3], b = 2, c = multiply) {
  if (Array.isArray(a)) {
    return a.map(el => {
      return c(el, b);
    });
  }
  return c(a, b);
}

console.log(overloadedFunc()); // [2, 4, 6]
console.log(overloadedFunc([2, 4, 6, 8])); // [4, 8, 12, 16]
console.log(overloadedFunc([2, 4, 6], 3)); // [6, 12, 18]
console.log(overloadedFunc(10)); // 20
console.log(overloadedFunc(8, 3)); // 24
