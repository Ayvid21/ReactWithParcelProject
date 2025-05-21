const calculateAverage = (input) => {
  if (!Array.isArray(input) || input.length === 0) {
    throw Error("Input cannot be an empty array!");
  } else {
    let sum = 0;
    for (let i = 0; i < input.length; i++) {
      if (typeof input[i] !== "number") {
        throw Error("All elements in the array should be numbers!");
      }
      sum += input[i];
    }
    let average = sum / input.length;
    return average;
  }
};

let array = [12, 43, 54, 67, 87, 98, 123, 454, 874];
let array1 = [-1, -2]; 
let array2 = 1;
let array3 = [1, 2, "4"];
console.log(calculateAverage(array1 ));
