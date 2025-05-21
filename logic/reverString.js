const reversedStr = (str) => {
    if(typeof str !== 'string') {
        throw new Error("Only strings allowed");
    }
    let result = '';
    for(let i = str.length-1; i >= 0; i--) {
        result += str[i];
    }
    return result;
}

const reversedStr2 = (str) => {
    if(typeof str === 'string') {
        let result = '';
        for( let i=str.length-1; i>=0; i-- ) {
            result += str[i];
        }
        return result;
    }
    else {
        throw new Error("Only strings allowed");
    }
}

const reversedStr3 = (str) => {
    const splittedInput = str.split('');
    
}

const reverseStr = (str) => {
    let newStr = '';
    for(let i=str.length-1; i>=1; i--) {
        newStr += str[i]; 
    }
    return newStr;
}

// console.log(reversedStr("Software Development"));
// console.log(reversedStr("121233"));
// console.log(reversedStr(11323));
console.log(reverseStr("Software Development"));