const maxInterv = (...arr) => {
  let interval = [];
  if (arr.length <= 1) return 0;
  for (let i = 0; i < arr.length - 1; i++) {
    interval.push(Math.abs(arr[i + 1] - arr[i]));
  }
  return Math.max(...interval);
};

console.log(maxInterv(3, 5, 2, 7)); //5
console.log(maxInterv(3, 5, 2, 7, 11, 0, -2)); //11
console.log(maxInterv(3, 5)); //2
console.log(maxInterv(3)); //0

/* 2 - Variant
const maxInterv = (...arr) => {
  if (arr.length <= 1) return 0;
  let int = arr.reduce((total, cur, i) => {
    if (i < 1) return total;
    let value = Math.abs(cur - arr[i - 1]);
    total.push(value);
    return total;
  }, [])
  return Math.max.apply(null, int);
}

console.log(maxInterv(3, 5, 2, 7)); //5
console.log(maxInterv(3, 5, 2, 7, 11, 0, -2)); //11
console.log(maxInterv(3, 5)); //2
console.log(maxInterv(3)); //0
*/


