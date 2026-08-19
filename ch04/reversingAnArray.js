function reverseArray(array) {
    let result = [];
    for (let i = array.length - 1; i >= 0; i--) {
        result.push(array[i]);
    }

    return result;
}

function reverseArrayInPlace(array) {
    let copy = [];
    for (let i = array.length - 1; i >= 0; i--) {
        copy.push(array[i]);
        array.pop();
    }

    for (let number of copy) {
        array.push(number);
    }
}
