const sumOfLen = (...str) => {
  const newStr = str.join('').replace(/^\s+|\s+$/g, '');
  return newStr.length;
};

console.log(sumOfLen('hello', 'hi')); //7
console.log(sumOfLen('hi')); //2
console.log(sumOfLen()); //0
console.log(sumOfLen('hello', 'hi', 'my name', 'is')); //16

