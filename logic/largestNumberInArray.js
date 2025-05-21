const largestNumberInArray = (array) => {
  if (!array || array.length === 0) {
    throw Error("Require numbers in the Array!");
  }
  if (!array.every((item) => typeof item === "number")) {
    throw Error("All elements in the array should be numbers!");
  } else {
    let largestNumber = array[0];
    for (let i = 1; i < array.length; i++) {
      if (array[i] > largestNumber) {
        largestNumber = array[i];
      }
    }
    return largestNumber;
  }
};

const largestNumberInArray2 = (array) => {
    if (!array || array.length === 0) {
      throw Error("Require numbers in the Array!");
    }
    if (!array.every((item) => typeof item === "number")) {
      throw Error("All elements in the array should be numbers!");
    } else {
        const largestNumber = Math.max(...array);
        return largestNumber;
    }
  };

let array = [1, 32, 867, 78, 215, 76, 345];
console.log(largestNumberInArray(array));
console.log(largestNumberInArray2(array));
