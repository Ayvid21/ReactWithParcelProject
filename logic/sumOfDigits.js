const sumOfDigits = (digit) => {
    if(typeof digit !== 'number' ) {
        throw Error("Input should be a number!");
    }
    if( digit < 0 ) {
        throw Error("Input number should be positive!");
    }
    if (!Number.isInteger(digit)) {
        throw Error("Input number should be an integer!");
    }
    else {
        let sum = 0;
        while( digit > 0 ) {
            sum += digit % 10;
            digit = Math.floor( digit / 10 );
        }
        return sum;
    }
}

const sumOfDigits2 = (digit) => {
    if(typeof digit !== 'number' ) {
        throw Error("Input should be a number!");
    }
    if( digit < 0 ) {
        throw Error("Input number should be positive!");
    }
    if (!Number.isInteger(digit)) {
        throw Error("Input number should be an integer!");
    }
    else {
        const inputNumberAsString = digit.toString();
        const splittedInputString = inputNumberAsString.split('');
        console.log(splittedInputString);
        let sum = 0;
        splittedInputString.forEach( (num) => {
            sum += parseInt(num)
        });
        return sum;
    }
}

console.log(sumOfDigits(32)); // 5
console.log(sumOfDigits2(123)); // 6
console.log(sumOfDigits(-5)); // Error: Input number should be positive!
console.log(sumOfDigits(12.34)); // Error: Input number should be an integer!
console.log(sumOfDigits("123")); // Error: Input should be a number!