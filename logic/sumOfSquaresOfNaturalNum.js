//Funtion to find the sum of squares of the 1st N Natural No

const sumOfSquaresOfNumber = (inputNumber) => {
    if(typeof inputNumber !== "number") {
        throw Error("Input should be a number!");
    }
    let result = 0; 
    for(let i=1; i<=inputNumber; i++) { 
        // result += i * i;
        result += Math.pow(i, 2); 
    }
    return result;
}

let input = 5;
console.log(sumOfSquaresOfNumber(input));