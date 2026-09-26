function delay(ms) {
    return new Promise(resolve => {
        setTimeout(resolve, ms);
    });
}

console.log("Starting...");

delay(1000)
    .then(() => {
        console.log("1 second");
        return delay(2000);
    })
    .then(() => {
        console.log("3 seconds total");
    });