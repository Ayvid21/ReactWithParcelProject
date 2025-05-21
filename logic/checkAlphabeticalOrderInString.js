const checkAlphabeticalOrderInString = (str) => {
    str = str.replace(/ /g, '').toLowerCase();
    for(let i=0; i<str.length-1; i++) {
        if(str[i] > str[i+1]) {
            return false;
        }
    }
    return true;
}

let string = "ace hkosvz"; // true
let string2 = "abca b"; //false
console.log(checkAlphabeticalOrderInString(string));
console.log(checkAlphabeticalOrderInString(string2));