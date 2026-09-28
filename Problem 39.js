function flattenObject(obj, parentKey = "", result = {}) {
    for (let key in obj) {
        let newKey = parentKey ? parentKey + "." + key : key;

        if (
            typeof obj[key] === "object" &&
            obj[key] !== null &&
            !Array.isArray(obj[key])
        ) {
            flattenObject(obj[key], newKey, result);
        } else {
            result[newKey] = obj[key];
        }
    }

    return result;
}

const readline = require("readline");

const input = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

input.question("Enter an object in JSON: ", (data) => {
    try {
        const obj = JSON.parse(data);
        console.log("Flattened:", flattenObject(obj));
    } catch (error) {
        console.log("Invalid JSON");
    }

    input.close();
});
