// day 1 -> Print a Solid Square of size n * n
// ****
// ****
// ****
// ****

const printSolidSquare = ( n ) => {
    let str = '';
    for(let i = 1; i <= n; i++) { // i=1 // i=2 // i=3 // i=4
        for(let j = 1; j <= n; j++) { // j=1 / j=2 / j=3 / j=4
            str += "*"; // * * * * // * * * * // * * * * // * * * *
        }
        str += "\n"; // newline
    }
    return str;

}

let sizeOfSquare = 4;
console.log(printSolidSquare(sizeOfSquare))