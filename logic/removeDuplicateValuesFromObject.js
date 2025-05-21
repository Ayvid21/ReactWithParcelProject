// Remove the Duplicate Values from an Object

const removeDuplicateValuesFromObject = (obj) => {
    const uniqueValue = new Set()
    let result = {}

    for (const [key, value] of Object.entries(obj)) {
        if(!uniqueValue.has(value)) {
            uniqueValue.add(value)
            result[key] = value
        }        
    }
    return result
}

const obj = {
    a: 1,
    b: 2,
    c: 3,
    d: 2,
    e: 1
} // output -> {a: 1, b: 2, c: 3}

console.log(removeDuplicateValuesFromObject(obj))