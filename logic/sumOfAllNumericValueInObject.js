// write a function to calculate the sum of all the odd numbers from the object

const sumOfAllNumericValueInObject = (obj) => {
    let objValues = Object.values(obj);

    // the below code is correct but we can have an other alternative as well
    // let sum = 0;
    // objValues.map((item) => {
    //     if(typeof(item) === "number" ) {
    //         sum += item
    //     }
    // })
    // return sum;

    // //filter
    let numericValues = objValues.filter((item) => typeof(item) === 'number');

     // //reduce
    let sumOfNumbers = numericValues.reduce((acc, curr) => acc+curr, 0);
    return sumOfNumbers

}

const obj = {
    a: 1,
    b: 2,
    c: "62",
    d: 3,
    e: 4,
    f: 5,
    g: "42"
} // output -> 138

console.log(sumOfAllNumericValueInObject(obj));