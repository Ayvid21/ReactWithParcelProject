const countCharacterInString = (input) => {
    input = input.toLowerCase();
    let charCount = {};
    for(let i=0; i<input.length; i++) {
        let char = input[i];
        if(charCount[char]) {
            charCount[char]++;
        } else {
            charCount[char] = 1;
        }
    }
    return charCount;
} 

let string = "Divya Ayviddd Vidyaaa";
console.log(countCharacterInString(string))