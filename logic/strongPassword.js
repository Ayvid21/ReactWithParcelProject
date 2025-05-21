// program to check if the given password is strong or not
// password should have at least 8 character
// password should have at least one lowerCase character -> a-z
// password should have at least one upperCase character -> A-Z
// password should have at least one special Character ->  !@
// password should have at least one number -> 0-9

const isPasswordStrong = (inputPasswordStr) => {
    inputPasswordStr = inputPasswordStr.trim();
    let lengthOfPassword = inputPasswordStr.length;
    let lowerCaseCharString = 'qwertyuioplkjhgfdsazxcvbnm';
    let upperCaseCharString = 'QWERTYUIOPLKJHGFDSAZXCVBNM';
    let specialCharString = '!@#$%^&*()_';
    let numberString = '1234567890';

    if(lengthOfPassword < 8) {
        return `false ${inputPasswordStr} is not strong`;
    }

    let lowerCaseExist = false;
    let upperCaseExist = false;
    let specialCharExist = false;
    let numberExist = false

    for(let char of inputPasswordStr) {
        if(lowerCaseCharString.includes(char)) {
            lowerCaseExist = true;
        }
        else if(upperCaseCharString.includes(char)) {
            upperCaseExist = true;
        }
        else if(specialCharString.includes(char)) {
            specialCharExist = true;
        }
        else if(numberString.includes(char)) {
            numberExist = true;
        }
    }

    if(numberExist && upperCaseExist && lowerCaseExist && specialCharExist) {
        return `true ${inputPasswordStr} is strong.`
    }
    return `false ${inputPasswordStr} is not strong.`
}

let inputPassword1 = 'duN@193_e';
let inputPassword2 = 'd1vY@dIV8';
let inputPassword3 = '1234';
console.log(isPasswordStrong(inputPassword1))
console.log(isPasswordStrong(inputPassword2))
console.log(isPasswordStrong(inputPassword3))