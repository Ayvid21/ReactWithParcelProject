// factorial of a number
const factorial = (num) => {
    if(typeof num !== 'number') {
        throw Error("Input should be a number only!");
    }
    else if( num < 0 ) {
        throw Error("Input should be a positive number!");
    } 
    else {
        let fact = 1;
        for( let i = num; i > 0; i-- ) {
            fact *= i;
        }
        return fact;
    }
};

// factorial using recursion 
const recursionFactorial = (num) => {
    console.log("input number is ", num);
    if(typeof num !== 'number') {
        throw Error("Input should be a number only!");
    }
    else if ( num === 0 || num === 1 ) {
        return 1;
    }
    else if( num < 0 ) {
        throw Error("Input should be a positive number!");
    }
    else {
        return num * recursionFactorial(num - 1)
    }
}

console.log(factorial(5)); // 120
console.log(recursionFactorial(10)); // 120
console.log(factorial(-1)); // Error: Input should be a positive number!
console.log(factorial("string")); // Error: Input should be a number only!
console.log(factorial(true)); // Error: Input should be a number only!