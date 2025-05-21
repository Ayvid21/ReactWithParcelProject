const isPrimeNumber = (input) => {
    if(typeof input !== 'number') {
        throw Error("Input can be numbers only!");
    }
    else {
        let result = true;
        for( let i=2; i<input; i++ ) { 
             if(input % i === 0) {
                result = false;
                break;
             }
        }
        return `Is ${input} prime ? ${result}`;
    }
}

const isPrimeNumber2 = (input) => {
    let result = true;
    if(typeof input !== 'number') {
        throw Error("Input can be numbers only!");
    }
    if(input === 2) {
        return `Is ${input} prime ? ${result}`;
    }
    if(input % 2 === 0) {
        result = false;
        return `Is ${input} prime ? ${result}`;
    }
    else {
        for( let i=3 ; i<input; i=i+2 ) {
             if(input % i === 0) {
                result = false;
                break;
             }
        }
        return `Is ${input} prime ? ${result}`;
    }
}
console.log(isPrimeNumber(2123)); 
console.log(isPrimeNumber2(2));

const isPrimee = (input) => {
    if(input <= 1) {
        console.log(input, 'is not Prime');
    }
    for(let i=0; i<input; i++) {
        if(input%2 === 0) {
            console.log(input, 'is not Prime');
            return false
        }
    }
    console.log(input, 'is Prime');
}

console.log(isPrimee(2));