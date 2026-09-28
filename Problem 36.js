function safeJsonParse(str) {
    try {
        return JSON.parse(str);
    } catch (error) {
        return null;
    }
}

const readline = require("readline");

const input = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

input.question("Enter JSON: ", (data) => {
    console.log("Result:", safeJsonParse(data));
    input.close();
});