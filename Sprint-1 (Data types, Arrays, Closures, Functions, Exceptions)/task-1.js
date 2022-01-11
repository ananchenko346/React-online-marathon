function getModifiedArray(array) {

    let newArray = [...array];
    newArray.splice(0, 1, 'Start');
    newArray.splice(newArray.length - 1, 1, 'End');
    return newArray;
};

getModifiedArray([12, 6, 22, 0, -8]);