function mergeObjects(obj1, obj2) {
    return { ...obj1, ...obj2 };
}

const readline = require("readline");

const input = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

input.question("Enter first object: ", (data1) => {
    const obj1 = JSON.parse(data1);

    input.question("Enter second object: ", (data2) => {
        const obj2 = JSON.parse(data2);

        console.log("Merged object:", mergeObjects(obj1, obj2));

        input.close();
    });
});