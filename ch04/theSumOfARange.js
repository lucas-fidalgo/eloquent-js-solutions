function range(start, end, step = 1) {
    const result = [];
    for (let i = start; step > 0 ? i <= end : i >= end; i += step) {
        result.push(i);
    }
    return result;
}

function sum(numbers) {
    let sum = 0;
    for (let number of numbers) {
        sum += number;
    }

    return sum;
}
