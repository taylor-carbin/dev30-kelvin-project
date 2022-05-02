// Today's forecast is 293 degrees Kelvin. The weather will not change today.
const kelvin = 0;

// When converting from Kelvin to celsius, subtract 273 from the Kelvin temperature.
var celsius = kelvin - 273;

// When converting from celsius to fahrenheit, multiply the celcius temperature by 9/5, then add 32. We should be able to change the variable's value
// The .floor method will round down the F temperature if it includes a decimal value

var fahrenheit = Math.floor(celsius * ( 9 / 5 ) + 32);

// Project only required me to print the temperature in fahrenheit, but I included all four conversions because I'm a science teacher. Why not?
console.log(`The temperature is ${kelvin} degrees Kelvin.`);

console.log(`The temperature is ${celsius} degrees celsius.`);

console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);

var newton = Math.floor(celsius * ( 33 / 100 ));
console.log(`The temperature is ${newton} degrees Newton.`);
