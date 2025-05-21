const celsiusToFahrenheit = (temperatureInCelsius) => {
    if(typeof temperatureInCelsius !== 'number') {
        throw Error("The temperature can be integer only!");
    }
    let temperatureInFahrenheit = Math.round((temperatureInCelsius * 9/5) + 32);
    return temperatureInFahrenheit;
}


let temperature = 27;
console.log(celsiusToFahrenheit(temperature));