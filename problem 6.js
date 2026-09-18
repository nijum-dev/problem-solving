function reverseString(str) {
    return str.split("").reverse().join("");
}

const readline = require("readline");

const input = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

input.question("Enter a string: ", (str) => {
    console.log("Reversed string:", reverseString(str));
    input.close();
});