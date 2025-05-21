// using a variable
const swappingNumbers = (input1, input2) => {
    console.log(`Before swapping input1 = ${input1} and input2 = ${input2}`);
    let input3 = 0;
    input3 = input1;
    input1 = input2;
    input2 = input3
    return `After swapping input1 = ${input1} and input2 = ${input2}`
}

//without using variable
const swappingNumbers2 = (input1, input2) => {
    console.log(`Before swapping input1 = ${input1} and input2 = ${input2}`);
    input1 = input1 + input2;
    input2 = input1 - input2;
    input1 = input1 - input2;
    return `After swapping input1 = ${input1} and input2 = ${input2}`
}


let input1 = 24;
let input2 = 58;
// console.log(swappingNumbers(input1, input2))
console.log(swappingNumbers2(input1, input2))