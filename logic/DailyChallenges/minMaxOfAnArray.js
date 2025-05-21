// Q1 -> function to that takes and array of numbers and returns both the maximum and the minimum values.

const minMaxOfArray = (array) => {
    let minValue = Math.min(...array);
    let maxValue = Math.max(...array);
    return `MinValue: ${minValue}, MaxValue: ${maxValue} `
}

const arr = [11,23,53,97,55];
console.log(minMaxOfArray(arr));