let numArr = [1,2,3,4,5];

// function add (a,b,...num) {
//     console.log(a,b)
//     console.log("num:", num); 
//     let sum = 0;
//     for(let i=0; i<num.length; i++) {
//         sum += num [i];
//     }
//     return sum;
// } 
function add (...num) {
    return num.reduce((acc, curr) => acc+curr);
}

const result = add(...numArr); 
console.log(result)