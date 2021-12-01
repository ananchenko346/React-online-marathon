const howMuchSec = (...num) => {
  if (!num.length) return 0;

  const multipliers = [
    0,
    60,
    60 ** 2,
    60 ** 2 * 24,
    60 ** 2 * 24 * 30,
    60 ** 2 * 24 * 30 * 12
  ];

  return num.reduce((total, cur, i) => {
    return total + cur * multipliers[i];
  });
};

console.log(howMuchSec(12, 3)); //192
console.log(howMuchSec(1, 33, 22)); //81181
console.log(howMuchSec()); //0