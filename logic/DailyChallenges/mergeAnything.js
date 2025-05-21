// Q2 -> function to merge two arrays or objects. Print the error if the inputs are of different types.

const mergeAnything = (input1, input2) => {
  if (Array.isArray(input1) && Array.isArray(input2)) {
    let mergedArray = [...input1, ...input2];
    return mergedArray;
  } else if (
    typeof input1 == "object" &&
    typeof input2 == "object" &&
    !Array.isArray(input1) && !Array.isArray(input2)
  ) {
    let mergedObject = { ...input1, ...input2 };
    return mergedObject;
  } else {
    console.log("Error: Inputs are of different types", input1, input2);
  }
};

// input for array
const array1 = [1, 2, 3, 4, 5];
const array2 = [4, 5, 6, 7, 8, 0];

//// input for object
const obj1 = { q: 1, w: 2, e: 3, r: 4, t: 5 };
const obj2 = { y: 4, u: 5, i: 6, o: 7, p: 8, l: 0 };

console.log(mergeAnything(array1, obj2));
