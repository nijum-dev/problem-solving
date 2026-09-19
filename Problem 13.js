function removeDuplicates(arr) {
    return [...new Set(arr)];
}

const readline = require("readline");

const input = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

input.question("Enter numbers separated by spaces: ", (numbers) => {
    const arr = numbers.split(" ").map(Number);

    console.log("Without duplicates:", removeDuplicates(arr));

    input.close();
});