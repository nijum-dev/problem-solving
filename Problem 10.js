function countChar(str, char) {
    return str.split(char).length - 1;
}

const readline = require("readline");

const input = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

input.question("Enter a string: ", (str) => {
    input.question("Enter a character: ", (char) => {
        console.log("Occurrences:", countChar(str, char));
        input.close();
    });
});