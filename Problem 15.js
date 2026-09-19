function chunkArray(arr, size) {
    let result = [];

    for (let i = 0; i < arr.length; i += size) {
        result.push(arr.slice(i, i + size));
    }

    return result;
}

const readline = require("readline");

const input = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

input.question("Enter numbers separated by spaces: ", (numbers) => {
    const arr = numbers.split(" ").map(Number);

    input.question("Enter chunk size: ", (size) => {
        console.log("Chunks:", chunkArray(arr, Number(size)));

        input.close();
    });
});