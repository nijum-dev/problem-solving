function myPromiseAll(promises) {
    return new Promise((resolve, reject) => {
        let results = [];
        let completed = 0;

        if (promises.length === 0) {
            resolve([]);
            return;
        }

        promises.forEach((promise, index) => {
            Promise.resolve(promise)
                .then((result) => {
                    results[index] = result;
                    completed++;

                    if (completed === promises.length) {
                        resolve(results);
                    }
                })
                .catch((error) => {
                    reject(error);
                });
        });
    });
}

// Example
const p1 = Promise.resolve("Apple");
const p2 = Promise.resolve("Banana");
const p3 = Promise.resolve("Mango");

myPromiseAll([p1, p2, p3])
    .then(results => console.log(results))
    .catch(error => console.log("Error:", error));