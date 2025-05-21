// JS function to print the following pattern
// output
// 1111
// 2222
// 3333
// 4444

const soildNumberSquare = (input) => {
    let str = "";
    for(let i=1; i<=input; i++) {
        for(let j=1; j<=input; j++) {
            str += i;
        }
        str += "\n";
    }
    console.log(str)
}

let n = 4;
console.log(soildNumberSquare(n))