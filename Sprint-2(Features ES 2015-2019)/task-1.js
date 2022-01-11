const filterNums = (arr, elem = 0, str = 'greater') => {

  return str === 'less' ? arr.filter(item => item < elem) :
    arr.filter(item => item > elem);

};

console.log(filterNums([-1, 2, 4, 0, 55, -12, 3], 11, 'greater'));  //[ 55]
console.log(filterNums([-2, 2, 3, 0, 43, -13, 6], 6, 'less')); // [-2, 2, 3, 0, -13]
console.log(filterNums([-2, 2, 3, 0, 43, -13, 6], -33, 'less')); //  []
console.log(filterNums([-2, 2, 3, 0, 43, -13, 6])); // [2, 3, 43, 6]
console.log(filterNums([-2, 2, 3, 0, 43, -13, 6], 23));  //[43]