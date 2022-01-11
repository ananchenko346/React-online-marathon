function add(x, y) {
  return new Promise((resolve, reject) => {
    if (typeof x === 'number' && typeof y === 'number') {
      return resolve(x + y);
    }
    reject('Error!');
  });
}

add(2, 2).then(res => console.log(res));
add(2, "a").catch(err => console.log(err));