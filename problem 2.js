function isEven(n) {
    return n % 2 === 0;
}

const readline = require("readline");

const input = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

input.question("Enter a number: ", (number) => {
    console.log(isEven(number));
    input.close();
});
