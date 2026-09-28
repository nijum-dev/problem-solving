async function retry(fn, times) {
    for (let i = 1; i <= times; i++) {
        try {
            return await fn();
        } catch (error) {
            if (i === times) {
                throw error;
            }

            console.log("Attempt", i, "failed. Retrying...");
        }
    }
}

// Example async function
let attempts = 0;

async function unstableFetch() {
    attempts++;

    if (attempts < 3) {
        throw new Error("Request failed");
    }

    return "Success!";
}

async function main() {
    try {
        const result = await retry(unstableFetch, 3);
        console.log(result);
    } catch (error) {
        console.log("All attempts failed");
    }
}

main();