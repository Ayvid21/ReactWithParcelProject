// function declaration
function square1 (num) {
    return num * num;
}

// function expression 
const square2 = function(num) {
    return num * num;
}

// arrow function expression
const square3 = (num) => {
    return num * num;
}

// arrow function expression // implicit return
const add = (num1, num2) => num1 + num2;

// setTimeout(() => {
//     console.log("hii")
// }, 2000)

const random = () => Math.floor(Math.random()*10);

// console.log( square1(2) );
// console.log( square2(3) );
// console.log( square3(4) );
// console.log( add(4, 3) );
// console.log( random() );


// Default param
const rollADie = (numberOfSides = 6) => {
    return Math.floor( Math.random() * numberOfSides) + 1;
}
// console.log(rollADie(8))


// Spread operator
const nums1 = [1,2,3,4,5];
const nums2 = [6,7,8,9];
const myName = 'divya'
const myObj = {
    a: 1,
    b: 4
}
const newObj = {
    c: 2,
    d: 5
}
const concatArray = nums1.concat(nums2);
const joinedArray1 = [...nums1, ...nums2, ...myName]
const joinedArray2 = [...nums1, ...nums2]
const updatedObj = {...myObj, ...newObj, e: 6}

function adds() {
    let sum = 0;
    for(let i=0; i<arguments.length; i++) {
        sum += arguments[i]
    }
    return sum;
}
// console.log( adds(1,2,3) )


//REST parameters
const nums3 = [3,4,7,9,5];

function addition(...nums) {
    console.log(...nums)
    let sum = 0;
    for(let i=0; i<nums.length; i++) {
        sum += nums[i]
    }
    return sum;
}

function addition2(...nums) {
    return nums.reduce((acc, curr) => acc + curr)
}
// console.log(addition2(...nums3))


// Destructuring in Js
const colors = ['red', 'green', 'yellow', 'pink', 'balck'];

const user = {
    name: "Divya",
    age: 24,
    address: {
        city: 'Bangalore',
        state: 'Karnataka'
    }
}

// const color1 = colors[1];
// const color2 = colors[2];
// const color3 = colors[3];
// console.log(color1, color2, color3) // red green yellow

const[color1, b] = colors;
console.log(color1, b)