const exponentCalculator = (base, power) => {
    if(typeof base !== 'number' || typeof power !== 'number') {
        throw Error("The base and power can only be a number!")
    }
    if( base < 0 || power < 0 ) {
        throw Error("Base and Power can never be negative!")
    }
    if( power === 0) {
        return 1;
    }
    else {
        let result = 1;
        for(let i=1; i<=power; i++) {
            result *= base;
        }
        return result;
    }
}

console.log(exponentCalculator(1,0));