// Reverse Keys And Values In An Object

const reverseKeysAndValuesInAnObject = (obj) => {
    reverseObj = {}
    // Object.entries(obj) ->   [ [ 'a', 2 ], [ 'b', 5 ], [ 'c', 8 ] ]
    for (const [key, value] of Object.entries(obj)) {
        reverseObj[value] = key
    }
    return reverseObj;
}

const obj = {
    a: 2,
    b: 5,
    c: 8
} // output -> { 2: a, 5: b, 8: c }

console.log(reverseKeysAndValuesInAnObject(obj))