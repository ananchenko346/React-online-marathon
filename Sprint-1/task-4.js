function factorial(n) {
    let result = n;
    if (n === 0 || n === 1) {
        return 1;
    }
    while (n > 1) {
        n--;
        result = n * result;
    }
    return result;
};

function processArray(arr, factorial) {
    let newArr = arr.map(factorial);
    return newArr;
}
console.log(processArray([1, 2, 3, 4, 5], factorial));