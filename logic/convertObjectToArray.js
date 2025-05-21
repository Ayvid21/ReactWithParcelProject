// function to convert the object to an array containing two subarrays: 
// 1. array containing the keys
// 1. array containing the values

const convertObjectToArray = (inputObject) => {
    let keysArray = Object.keys(inputObject); 
    let valuesArray = Object.values(inputObject);
    let result = [keysArray, valuesArray];

    return result;
}

let input = {
    a: 18,
    b: 22,
    c: 54,
    d: 39
} 
console.log(convertObjectToArray(input));
console.log(convertObjectToArray({Name: "Divya", LastName: "Rajpoot", Age: 24, Profession: "Developer"}));