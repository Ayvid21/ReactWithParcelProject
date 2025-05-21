// Create Object With Keys as Numbers and Values as their Squares.

const createObjectWithKeys = (input) => {
    let result = {}
    for(let i=1; i<=input; i++) {
        result[i] = i*i
    }
    return result;
}

const input = 2
// output -> { 1: 1, 2: 4 }

const input2 = 6
//output -> { 1: 1, 2: 4, 3: 9, 4: 16, 5: 25, 6: 36 }
console.log(createObjectWithKeys(input));
console.log(createObjectWithKeys(input2));