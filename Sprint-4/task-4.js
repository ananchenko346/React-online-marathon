function* take(n, iter) {
  let i = 0;
  for (let val of iter) {
    yield val;
    i++;
    if (i >= n) { break }
  }
}

const arr = ['a', 'b', 'c', 'd'];
for (const x of take(2, arr)) {
  console.log(x);
}