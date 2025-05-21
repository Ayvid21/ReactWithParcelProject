const calculateSimpleInterest = (principalAmount, rateOfInterest, timeDuration) => {
    if( principalAmount < 0 || rateOfInterest < 0 || timeDuration < 0 ) {
        throw Error("Input cannot be negative!");
    }
    if( typeof principalAmount !== 'number' || typeof rateOfInterest !== 'number' || typeof timeDuration !== 'number') {
        throw Error("Input can only be numbers only!");
    }
    let simpleInterest = (( principalAmount * rateOfInterest * timeDuration ) / 100).toFixed(2); // toFixed is used to get the decimal till 2 points
    return simpleInterest;

}

console.log(calculateSimpleInterest(1000, 5, 1)); // (principalAmount, rateOfInterest, timeDuration)
console.log(calculateSimpleInterest(25790, 89.7998760, 5));
// console.log(calculateSimpleInterest(-2, 89.7998760, 5));