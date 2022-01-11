function getMin(arr) {
  return Math.min.apply(Math, arr);
}

console.log(getMin([1, 3, 4, 5, 9]))