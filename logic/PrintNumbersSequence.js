// JS function to print the following pattern
// output
// 1234
// 1234
// 1234
// 1234

const PrintNumbersSequence = (input) => {
    let str = "";
    for(let i=1; i<=input; i++) {
        for(let j=1; j<=input; j++) {
            str += j;
        }
        str += "\n";
    }
    console.log(str)
}

let n = 4;
console.log(PrintNumbersSequence(n))