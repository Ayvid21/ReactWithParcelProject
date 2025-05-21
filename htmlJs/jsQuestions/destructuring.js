const color = ["red", "green", "blue", "yellow", "orange", "white", "black"];

const user = {
    name: "Divya",
    age: 24,
    address: {
        city: "Bangalore",
        state: "Karnataka"  
    }
}

//in case of arrays
const color1 = color[1] //color1 = red
const color2 = color[2] //color2 = green
const color3 = color[4] //color3 = blue

const [color4, b] = color; // color4 = red, b=green
const [,,, h] = color; // colorAfter3rd // h = yellow  
const {5: color5} = color // {indexFomArray: nameYouWantToGive} = colorArray
 

// in case of objects
// get value from user object just use the exact name from the object
const {name, age, address} = user

// get value from user object give the name u want to have like u want name to be called as naam
const {name:naam, age:umar} = user

//destructuring deep -> "address" itself is a object inside "user" object // it is like calling the
// user obj => address obj => city(as jgh) and state(as tehsil) 
const {address:{city:jgh, state:tehsil}} = user 


function intro({age, name, address:{city}}) {
    console.log(age, city, name )
}
// intro(user);


function nameColors({5:color1, 1:color2}) {
    console.log(color1, color2)
}
nameColors(color)