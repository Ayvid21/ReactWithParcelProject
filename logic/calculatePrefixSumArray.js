//Calculate the prefix sum array of the given array
// inputArr = [2,4,5,7,9,3]; // output => [2,6,11,18,27,30]

const calculatePrefixSumArray = (array) => {
    let newArr = [];
    let sum = 0;
    for(let i=0; i<array.length; i++) {
        sum += array[i];
        newArr.push(sum);
    }
    return newArr;
}


const inputArr = [2,4,5,7,9,3];
console.log(calculatePrefixSumArray(inputArr))