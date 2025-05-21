// Convert Object To Array Of Key and Value Pair

const convertObjectToArrayOfKeyValuePair = (obj) => {
    let objArr = Object.entries(obj);
    // Object.entries() -> provides an array of entries( entries will also be array([key, value]) )
    //[ [ 'a', 3 ], [ 'b', 5 ], [ 'c', 8 ] ]

    // let result = objArr.map((element) => ({key:element[0], value:element[1]})) // this is also right
    // element[0] -> a, element[1]-> 3
    
    let result = objArr.map(([key, value]) => ({key:key, value:value})) 
    return result
}

const obj = {
    a:3,
    b:5,
    c:8
}
// output -> [ { key: a, value: 3 }, { key: b, value: 5 }, { key: c, value: 8 } ]
console.log(convertObjectToArrayOfKeyValuePair(obj));