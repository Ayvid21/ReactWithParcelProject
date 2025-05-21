// find the length of the longest string value in an object

const lengthOfLongestStringValueInObject = (obj) => {
    //get object value in array
    let objectValue = Object.values(obj)

    //check if the value are string and store them in an array
    let stringValue = objectValue.filter((item) => typeof(item) === "string")

    //find the length of each item in the string array // map return a new array on its own
    let stringsLength = stringValue.map((item) => item.length)

    //find the longest length from the array of strings
    let longestLength = Math.max(...stringsLength)
    return longestLength;

}

const obj = {
    a: "apple",
    b: "banana",
    c: "kiwi",
    d: "guava",
}

console.log(lengthOfLongestStringValueInObject(obj))