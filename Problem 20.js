function findDuplicateNames(arr) {
    let count = {};
    let duplicates = [];

    for (let person of arr) {
        let name = person.name;

        if (count[name]) {
            count[name]++;
        } else {
            count[name] = 1;
        }
    }

    for (let name in count) {
        if (count[name] > 1) {
            duplicates.push(name);
        }
    }

    return duplicates;
}

const readline = require("readline");

const input = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

input.question("Enter an array of objects: ", (data) => {
    const arr = JSON.parse(data);

    console.log("Duplicate names:", findDuplicateNames(arr));

    input.close();
});