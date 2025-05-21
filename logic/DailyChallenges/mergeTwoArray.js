// Q1 -> function to merge two arrays 

const mergeTwoArray = (array1, array2) => {
    let mergedArray = [ ...array1, ...array2 ];
    return mergedArray; 
}

const arr1 = [1,2,3,4,5];
const arr2 = [4,5,6,7,8,0];

console.log(mergeTwoArray(arr1, arr2));