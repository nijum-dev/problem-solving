function sumArray(arr) {
    return arr.reduce((sum, num) => sum + num, 0);
}

const readline = require("readline");

const input = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

input.question("Enter numbers separated by spaces: ", (numbers) => {
    const arr = numbers.split(" ").map(Number);

    console.log("Sum:", sumArray(arr));

    input.close();
});