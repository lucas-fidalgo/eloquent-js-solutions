function arrayToList(array) {
    if (array.length == 0) return;

    let list = null;

    for (let i = array.length - 1; i >= 0; i--) {
        list = {value: array[i], rest: list };
    }

    return list;
}

function listToArray(list) {
    let result = [];

    while (list != null) {
        result.push(list.value);
        list = list.rest;
    }

    return result;
}

function prepend(value, list) {
    let newList = {value: value, rest: list};
    return newList;
}

function nth(list, indexOfValue) {
    if (list === null) {
        return;
    } else if (indexOfValue == 0) {
        return list.value;
    } else {
        return nth(list.rest, indexOfValue - 1);
    }
}
