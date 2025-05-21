const user = {
    firstName: "Divya",
    lastName: "Rajpoot",
    age: 24,
}

// console.log(user.address.city); //error 

if(user.address) {
    console.log(user.address.city);
}

// console.log(user.address && user.address.city); //undefined if we do not have any one of the value in the obj


// optional chaining
console.log(user?.address?.city); //add ? it will check if city is there in obj then will return the value of city else undefined