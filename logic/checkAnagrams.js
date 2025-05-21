const checkAnagrams = (str1, str2) => {
  if(str1.length !== str2.length) {
    return false;
  };
  str1 = str1.toLowerCase();
  str2 = str2.toLowerCase();

  charCount1 = {};
  charCount2 = {};

  for(let i=0; i<str1.length; i++) {
    let char = str1[i];
    if(charCount1[char]) {
        charCount1[char]++;
    } else {
        charCount1[char] = 1;
    }
  }

  for(let i=0; i<str2.length; i++) {
    let char = str2[i];
    if(charCount2[char]) {
        charCount2[char]++;
    } else {
        charCount2[char] = 1;
    }
  };

  for(let char in charCount1) {
    if(charCount1[char] !== charCount2[char]) {
        return false;
    }
  }
  return true;
};

let inputStr1 = "divya";
let inputStr2 = "Ayvid"; 
console.log(checkAnagrams(inputStr1, inputStr2)); 