function findMax(arr) {
    let max = arr[0];

    for (let num of arr) {
        if (num > max) {
            max = num;
        }
    }

    return max;
}

const readline = require("readline");

const input = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

input.question("Enter numbers separated by spaces: ", (numbers) => {
    const arr = numbers.split(" ").map(Number);

    console.log("Maximum value:", findMax(arr));

    input.close();
});