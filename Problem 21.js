function factorial(n) {
    if (n === 0) {
        return 1;
    }

    return n * factorial(n - 1);
}

const readline = require("readline");

const input = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

input.question("Enter a number: ", (number) => {
    console.log("Factorial:", factorial(Number(number)));
    input.close();
});