function toFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
}

const readline = require("readline");

const input = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

input.question("Enter temperature in Celsius: ", (celsius) => {
    console.log("Temperature in Fahrenheit:", toFahrenheit(Number(celsius)));

    input.close();
});