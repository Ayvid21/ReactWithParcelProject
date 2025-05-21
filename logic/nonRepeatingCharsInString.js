// function to find first non repeating characters in string

const firstNonRepeatingCharsInString = (inputStr) => {
    if(inputStr.length === 0) {
        throw Error("The input string can't be empty!");
    }
    if(typeof inputStr !== "string") {
         throw Error("Only strings are accepted!");
    }
    else {
        inputStr = inputStr.toLowerCase();
        for(let i=0; i<inputStr.length; i++) {
            let char = inputStr[i];
            console.log(char, inputStr.indexOf(char), inputStr.lastIndexOf(char));
            if(inputStr.indexOf(char) === inputStr.lastIndexOf(char)) {
                return `${char} is the first non repeating character in ${inputStr}!`;
            }
        }
        return null;
    }

}
 
let input = "swiss";
console.log(firstNonRepeatingCharsInString(input));