// Function to rearrange vowels in the string in ascending order and let the consonants in there original order.
// eg => input = "d i v y a" => output = "d a v y i" 
// only rearrange the vowels not the consonants

const rearrangeVowels = (inputStr) => {
    console.log("Input String: ", inputStr);
    if(typeof inputStr !== "string") {
        throw Error("The input can only be a string!");
    }
    if (typeof inputStr !== "string") {
        throw Error("Input cannot be other than String!"); 
    }
    else {
        // first step
        // 1. store the vowels in the vowel array
        // 2.make a empty array to store the existing vowels in the string
        // 3. make a charlist of the length if the string and store the null at all the positions for now
        // 4. check if the character from the string exist in vowel arr, if so then push it to vowelList arr
        // 5. else push it to the charList arr at the same position it occurs
        // 6. sort the vowelList array
        inputStr = inputStr.replace(/ /g, '').toLowerCase();
        let vowels = ["a", "e", "i", "o", "u"];
        let vowelList = [];
        let charList = new Array(inputStr.length).fill(null);

        for(let i=0; i<inputStr.length; i++) {
            if(vowels.includes(inputStr[i])) {
                 vowelList.push(inputStr[i]);  
            }
            else {
                charList[i] = inputStr[i];
            } 
        }
        vowelList.sort()
        // console.log(charList)
        // console.log(vowelList)


        // second step
        // 1. declare a variable vowelIndex= 0
        // 2. start a loop on charList and check if the charList[i] === null
        // 3. if so then place the first value from vowelList to the charList[i]
        // 4. then join charlist
        let vowelIndex = 0;
        for(let i=0; i<charList.length; i++) {
            if(charList[i] === null) {
                charList[i] = vowelList[vowelIndex++]
            }
        }
        // console.log(charList)
        // console.log(vowelList)
        return `Output String: ${charList.join("")}`;
    }
}

const input = "divya";
console.log(rearrangeVowels(input));