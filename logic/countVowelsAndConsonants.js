const countVowelsAndConsonants = (inputStr) => {
  if (inputStr.length === 0) {
    throw Error("Input cannot be empty!");
  }
  if (typeof inputStr !== "string") {
    throw Error("Input cannot be other than String!"); 
  } else {
    // this can also be used!
    // inputStr = inputStr.replace(/ /g, '').toLowerCase();

    inputStr = inputStr.split(' ').join('').toLowerCase();
    let vowels = ["a", "e", "i", "o", "u"]; 
    let vowelsCount = 0;
    let consonantsCount = 0;
    for (let i = 0; i < inputStr.length; i++) { 
      if (vowels.includes(inputStr[i])) {
        vowelsCount++;
      } else if (/^[a-z]$/.test(inputStr[i])){
        consonantsCount++;
      }
    }
    return `${inputStr}:  ${vowelsCount} Vowels and ${consonantsCount} Consonants`;
  }
};

console.log(countVowelsAndConsonants(" dIvYa 123 aa"));
// console.log(countVowelsAndConsonants("My name is Divya"));
// console.log(countVowelsAndConsonants(""));
// console.log(countVowelsAndConsonants(2));
