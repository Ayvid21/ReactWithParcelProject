// count Value Occurrences in an Object

const countValueOccurrencesinAnObject = (obj) => {
    let count = {}
    // Object.values(obj) -> [1,3,3,2,3,1,3]
    for (const value of Object.values(obj)) {
        count[value] = (count[value] || 0) + 1
    }
    return count;

}

const obj = {
    a: 1,
    b: 3,
    c: 3,
    d: 2,
    e: 3,
    f: 1,
    g: 3
}
// output -> { 1: 2, 2: 1, 3: 4 }

console.log(countValueOccurrencesinAnObject(obj));