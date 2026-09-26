function fibonacci(n) {
    let a = 0;
    let b = 1;

    for (let i = 0; i < n; i++) {
        let next = a + b;
        a = b;
        b = next;
    }

    return a;
}

const readline = require("readline");

const input = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

input.question("Enter n: ", (n) => {
    console.log("Fibonacci number:", fibonacci(Number(n)));
    input.close();
});