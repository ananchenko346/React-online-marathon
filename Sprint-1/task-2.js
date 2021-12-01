function combineArray(arr1, arr2) {
    arr3 = arr1.concat(arr2);
    let i = 0;
    while (i < arr3.length) {
        if (typeof arr3[i] !== "number") arr3.splice(i, 1);
        else i++;
    }
    return arr3;
}

console.log(combineArray([12, "User01", 22, true, -8], ["Index", 6, null, 15]));
