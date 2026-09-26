function memoize(fn) {
    let cache = {};

    return function(n) {
        if (cache[n]) {
            console.log("From cache");
            return cache[n];
        }

        console.log("Calculated");
        cache[n] = fn(n);

        return cache[n];
    };
}

const memoAdd = memoize(n => n + 10);

console.log(memoAdd(5));
console.log(memoAdd(5));