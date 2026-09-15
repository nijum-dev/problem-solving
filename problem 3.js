function largest(a, b, c) {
    return Math.max(a, b, c);
}

const readline = require("readline");

const input = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

input.question("Enter three numbers: ", (numbers) => {
    const [a, b, c] = numbers.split(" ").map(Number);

    console.log("Largest number:", largest(a, b, c));

    input.close();
});