const allFactorsNumber = (input) => {
    if(typeof input !== 'number') {
        throw Error("Input must be a number only!")
    }
    if(input < 0) {
        throw Error("Input should be greater than 0!")
    }
    else {
        let factor = [];
        for(let i=1; i<=input; i++) {
            if( input % i === 0 ) {
                factor.push(i);
            }
        }
        return `Factor of ${input}: ${factor}`;
    }
}

console.log(allFactorsNumber(4)); //1,2,4
console.log(allFactorsNumber(14)); //1,2,7,14
console.log(allFactorsNumber(35)); //1,5,7,35
// console.log(allFactorsNumber(-1)); //error