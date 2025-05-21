// Generate aRandom Number Within aSpecified Range including the min and max value

const GenerateRandomNumberWithinSpecifiedRange = (min, max) => {
    let randomNUmber = Math.floor(Math.random()*(max-min+1)+min);
    return randomNUmber;
}


console.log(GenerateRandomNumberWithinSpecifiedRange(5, 10));