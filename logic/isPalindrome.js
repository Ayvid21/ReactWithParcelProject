const reversedString = (str) => {
    let reversedStr = '';
    for( let i=str.length-1; i>=0; i-- ) {
        reversedStr += str[i];
    }
    return reversedStr;
}

const isPalindrome = (input) => {
    input = input.toLowerCase();
    if(typeof input !== 'string' ) {
        throw Error("Input needs to be a string!");
    }
    if( input.length === 0 ) {
        throw Error("String is empty!")
    }
    else {
        if(input === reversedString(input)) {
            return `${true} the ${input} is palindrome!`;
        } else {
            return `${false} the ${input} is not palindrome!`;
        }
    }
}

const isPalindrome2 = (input) => {
    input = input.toLowerCase();
    if(typeof input !== 'string' ) {
        throw Error("Input needs to be a string!");
    }
    if( input.length === 0 ) {
        throw Error("String is empty!")
    }
    else {
        for( let i=0; i <= input.length/2; i++ ) {
            if(input[i] !== input[input.length - 1 - i]) {
                return `${false} the ${input} is not palindrome!`;
            }
        }
        return `${true} the ${input} is palindrome!`;
    }
}

const isPalindrome3 = (input) => {
    input = input.toLowerCase();
    if(typeof input !== 'string' ) {
        throw Error("Input needs to be a string!");
    }
    if( input.length === 0 ) {
        throw Error("String is empty!")
    }
    else {
        let start = 0;
        let end = input.length-1;
        for( start, end ; start< end; start++, end-- ) {
            if( input[start] !== input[end]) {
                return `${false} the ${input} is not palindrome!`;
            }
        }
        return `${true} the ${input} is palindrome!`;
    }
}

console.log(isPalindrome("121"));
console.log(isPalindrome("madam"));
console.log(isPalindrome2("Level"));
console.log(isPalindrome3("Abbas"));
