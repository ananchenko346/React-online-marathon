function mapCreator(keys, values) {
  const map = new Map();

  for (let i = 0; i < keys.length; i++) {
    map.set(keys[i], values[i]);
  }

  map.forEach((value, key, map) => {
    typeof value !== 'string' ? map.delete(key) : map;
  });

  return map;
}

console.log(map1 = mapCreator([1, 2, 3, 4, 5, 6, 7], ["Lviv", "Rivne", "Kyiv", "Dnipro", "Kharkiv", "Chernivtsi", "Ivano-Frankivsk"]));
console.log(map1.size);  // 7
console.log(map1.get(1)); // Lviv

console.log(map2 = mapCreator([1, 2, 3, 4, 5, 6, 7], ["Lviv", 23, "Kyiv", "Dnipro", "Kharkiv", "Chernivtsi", true]));
console.log(map2.size);  // 5
console.log(map2.get(2));  // undefined