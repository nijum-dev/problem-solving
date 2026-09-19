function titleCase(str) {
    return str
        .split(" ")
        .map(word => word[0].toUpperCase() + word.slice(1))
        .join(" ");
}

const readline = require("readline");

const input = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

input.question("Enter a sentence: ", (str) => {
    console.log("Title Case:", titleCase(str));
    input.close();
});