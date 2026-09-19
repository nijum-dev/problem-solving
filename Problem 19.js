function invertObject(obj) {
    let result = {};

    for (let key in obj) {
        result[obj[key]] = key;
    }

    return result;
}

const readline = require("readline");

const input = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

input.question("Enter an object: ", (data) => {
    const obj = JSON.parse(data);

    console.log("Inverted object:", invertObject(obj));

    input.close();
});