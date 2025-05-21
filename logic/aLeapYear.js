const isLeapYear = (year) => {
    if( year < 0 ) {
        throw Error("Year cannot be negative!")
    }
    if(typeof year === 'string') {
        throw Error ("Year can only be a number!")
    }
    else {
        if( year % 4 === 0 ) {
            return true
        }
        return false
    }
}

const isLeapYear2 = (year) => {
    if( year < 0 ) {
        throw Error("Year cannot be negative!")
    }
    if(typeof year === 'string') {
        throw Error ("Year can only be a number!")
    }
    else {
        return ( year % 4 === 0 );
    }
}

console.log("2024 is Leap Year? ", isLeapYear(2022));
console.log("2089 is Leap Year? ", isLeapYear2(2089));