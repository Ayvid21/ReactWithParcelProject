// find the longest string value in an object

const longestStringValueInObject = (obj) =>  {
    //get object value in array
    let objValue = Object.values (obj);

    //find out the string value from the array
    let stringValues = objValue.filter( ( item ) => typeof( item ) === "string" )

    //find the length of each item in the string array // map return a new array on its own
    let stringLength = stringValues.map( ( item ) => item.length)

    //find the longest length from the array of strings by Math.max
    let longestLength = Math.max(...stringLength);

    //with the help of longest length find out the longest string from the array
    let longestString = stringValues.filter((item) => item.length === longestLength)

    // return the only element from the array either by spread operator or by array[0]
    return (longestString[0]);

}

const obj = {
    a: "apple",
    b: "banana",
    c: "kiwi",
    d: "guava",
    e: 23
} // output -> banana
console.log(longestStringValueInObject(obj))