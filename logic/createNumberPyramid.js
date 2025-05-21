const createNumberPyramid = (input) => {
    let pyramid = '';
    for (let i = 1; i <= input; i++) { // i=1, i<=12
        // Add leading spaces
        for (let space = 1; space <= input - i; space++) { //space=1; space<=8
            pyramid += ' ';
        }
        // Add numbers
        for (let count = 1; count <= i; count++) { //count=1; count<=9
            pyramid += count + ' '; //1
        }
        // New line after each row
        pyramid += '\n';
    }
    return pyramid;
}

const createNumberPyramid2 = (input) => {
    let pyramid = '';
    for (let i = 1; i <= input; i++) { // i=1, i<=9
        // Add leading spaces
        for (let space = 1; space <= input - i; space++) { //space=1; space<=8
            pyramid += ' ';
        }
        // Add numbers
        for (let count = 1; count <= i; count++) { //count=1; count<=9
            pyramid += count;
        }
        // Add numbers in reverse
        for (let reverse = i-1; reverse >= 1; reverse--) { //reverse=8; reverse>=1
            pyramid += reverse;
        }
        // New line after each row
        pyramid += '\n';
    }
    return pyramid;
}

let input = 9;
console.log(createNumberPyramid2(input))