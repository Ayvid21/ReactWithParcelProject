const checkEvenOdd = (input) => {
    if(typeof input !== 'number') {
        throw Error("Input should be a number only!");
    }
    else {
        if(input % 2 === 0) {
            return `${input} is Even`
        }
        else {
            return `${input} is Odd`
        }
    }
}

const input = 1232;
console.log(checkEvenOdd(input));