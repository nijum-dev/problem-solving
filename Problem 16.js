function countProperties(obj) {
    return Object.keys(obj).length;
}

const readline = require("readline");

const input = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

input.question("Enter an object: ", (data) => {
    const obj = JSON.parse(data);

    console.log("Number of properties:", countProperties(obj));

    input.close();
});