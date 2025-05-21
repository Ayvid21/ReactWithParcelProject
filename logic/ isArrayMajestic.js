// function to check if the array is majestic or not.
// an array whose sum of first three number is equal to the sum of last three numbers

const isArrayMajestic = (arr) => {
    let sumForFirstLoop = 0;
    let sumForSecondLoop = 0;
    for(let i=0; i<3; i++) {
        sumForFirstLoop += arr[i];
    }

    for(let i=arr.length-1; i>=arr.length-3; i--) {
        sumForSecondLoop += arr[i];
    }

    if(sumForFirstLoop === sumForSecondLoop) {
        return true;
    }
    return false;
}

let array = [6,4,5,4,5,6,3];
console.log( isArrayMajestic(array) );