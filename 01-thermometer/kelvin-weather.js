// The forecast today is 293 Kelvin.
const kelvin = 300;
// Celsius is 273 degrees less than Kelvin. The forecast today is 20 Celsius.
const celsius = kelvin - 273;
// Fahrenheit is calculated as the "let fahrenheit" variable follows. The forecast today is 68 Fahrenheit. 
let fahrenheit = celsius * (9/5) + 32;
// The following method is to round down the temperature
fahrenheit = Math.floor(fahrenheit);
// Convert to Newton
let newton = celsius * (33/100);
// Round down
newton = Math.floor(newton);

console.log("The temperature is " + fahrenheit + " degrees Fahrenheit.");
console.log("The temperature is " + kelvin + " degrees Kelvin.");
console.log("The temperature is " + celsius + " degrees Celsius.");
console.log("The temperature is " + newton + " degrees Newton.");