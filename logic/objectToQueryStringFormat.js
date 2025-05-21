// function that takes an object and converts it into a query String Format
// query string -> it ia a part of url that contains key value pairs and is used 
// to pass the data to the server. It stars after the ? symbol and separates the key value pair
// with & where each pair is in the format key = value

const objectToQueryString = (obj) => {
    const objKeys = Object.keys(obj);

    let query = objKeys.map( (element) =>
        `${encodeURIComponent(element)}=${encodeURIComponent(obj[element])}`
    )

    let queryString = query.join("&");
    return queryString;
}

let obj = {
    name: "Alice",
    age: 25
} 
// answer -> name=Alice&age=25 
// obj = { name: "Alice Ram @ hehe", age: 25 } 
// answer -> name=Alice%20Ram%20%40%20hehe&age=25
console.log(objectToQueryString(obj));