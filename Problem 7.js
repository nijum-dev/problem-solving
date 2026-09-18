function countVowels(str) {
    let count = 0;

    for (let char of str.toLowerCase()) {
        if ("aeiou".includes(char)) {
            count++;
        }
    }

    return count;
}

const readline = require("readline");

const input = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

input.question("Enter a string: ", (str) => {
    console.log("Number of vowels:", countVowels(str));
    input.close();
});