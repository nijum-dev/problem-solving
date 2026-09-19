function flattenArray(arr) {
    return arr.flat();
}

const readline = require("readline");

const input = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

input.question("Enter a nested array: ", (data) => {
    const arr = JSON.parse(data);

    console.log("Flattened array:", flattenArray(arr));

    input.close();
});