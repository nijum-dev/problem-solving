function isPalindrome(str) {
    let reverse = str.split("").reverse().join("");
    return str === reverse;
}

const readline = require("readline");

const input = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

input.question("Enter a string: ", (str) => {
    console.log(isPalindrome(str));
    input.close();
});