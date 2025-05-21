const isArmstrongNumber = (num) => {
  const digits = [];
  let number = num;
  while (number > 0) {
    let lastDigit = number % 10;
    digits.push(lastDigit);
    number = Math.floor(number / 10);
  }
  let lengthOfArr = digits.length;
  let result = 0;
  digits.forEach((d) => {
    result += Math.pow(d, lengthOfArr);
  });
   
  return num === result;
};

let number1 = 153;
let number2 = 370;
let number3 = 371;
let number4 = 123;
let number5 = 92727;
console.log(`${number4} is Armstrong Number? `,isArmstrongNumber(number4));
