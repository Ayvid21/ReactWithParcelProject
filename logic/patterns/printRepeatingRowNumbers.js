// day 2 -> Print Repeating Row Numbers

const printRepeatingRowNumbers = (number) => {
    let str = "";
    for( let i = 1; i <= number; i++ ) { // i=1
        for( let j = 1; j <= number; j++) { // j=1 / j=2 / j=3 / j=4 // repeats 4 times based on the value of the i
            str += i;  // concatenating the value of i in str
        }
        str += "\n" // adding new line after every end of j loop(end of row)
    }
    return str; // returning the final str
}

const numberOfRows = 4;
console.log(printRepeatingRowNumbers(numberOfRows))