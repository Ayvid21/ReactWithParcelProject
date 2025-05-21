// write a function to calculate the sum of all the odd numbers from the object

const sumOfOddNumericValue = (obj) => {
    let objValues = Object.values(obj);

    //filter
    let oddNumberValues = objValues.filter((item) => typeof(item) === "number" && item%2!==0);

    //reduce
    let sumOfNumbers = oddNumberValues.reduce((accumulator, currentValue) => accumulator+currentValue, 0);
    return sumOfNumbers ;

    // the below code is correct but we can have an other alternative as well
    // let sum = 0;
    // objValues.map((item) => {
    //     if(typeof(item) === "number" && (item % 2 !== 0)) {
    //         sum += item
    //     }
    // })
    // return sum;

}

const obj = {
    a: 11,
    b: 23,
    c: "62",
    d: 19,
    e: 12,
    f: "68",
    g: "41"
} // output -> 53

console.log(sumOfOddNumericValue(obj));