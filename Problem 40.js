function groupBy(arr, key) {
    return arr.reduce((result, item) => {
        let group = item[key];

        if (!result[group]) {
            result[group] = [];
        }

        result[group].push(item);

        return result;
    }, {});
}

const readline = require("readline");

const input = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

input.question("Enter array of objects in JSON: ", (data) => {
    input.question("Enter property key: ", (key) => {
        try {
            const arr = JSON.parse(data);
            console.log("Grouped:", groupBy(arr, key));
        } catch (error) {
            console.log("Invalid JSON");
        }

        input.close();
    });
});