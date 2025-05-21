// program that transpose a given matrix (swap rows with columns)

// for symmetric matrix
const transposeOfMatrixSymmetric = (arr) => {
    const numberOfRow = arr.length;
    const numberOfColumns = arr[0].length;
    const newArr = [];
    for(let i = 0; i < numberOfRow; i++) {
        for(let j = 0; j < numberOfColumns; j++) { 
            if(!newArr[j]) {
                newArr[j] = [];
            }
            newArr[j][i] = arr[i][j];
        }
    }
    return newArr; 
}

// for asymmetric matrix
const transposeOfMatrixAsymmetric = (arr) => {
    const maxColumns = Math.max(...arr.map(row => row.length));
    const newArr = [];

    for (let i = 0; i < maxColumns; i++) {
        newArr[i] = [];
        for (let j = 0; j < arr.length; j++) {
            newArr[i][j] = arr[j][i] !== undefined ? arr[j][i] : null;
        }
    }
    return newArr;
}

let symmetric = [
    [2,3],
    [5,4],
    [8,7] 
];

let asymmetric = [
    [2],
    [5,4],
    [8] 
];

console.log(transposeOfMatrixSymmetric(symmetric));
console.log(transposeOfMatrixAsymmetric(asymmetric));