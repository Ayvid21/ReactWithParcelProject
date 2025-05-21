// program to check if the given number is a perfect number or not
// perfect number  -> the sum of its proper divisors equals the number itself.

const isPerfectNumber = (input) => {
    if(!(input >= 0)) {
        throw Error("Input should be a positive number.");
    }
    const properDivisor = [];
    for(let i=1; i<input; i++ ) {
        if((input % i) === 0) {
            properDivisor.push(i);
        }
    }
    let sumOfDivisor = 0;
    properDivisor.forEach(element => {
        sumOfDivisor += element;
    });
    return sumOfDivisor === input;
}

let input1 = 1123;
let input2 = 496;
console.log(isPerfectNumber(input1));