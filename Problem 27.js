function mergeArrays(...arrays) {
    return arrays.flat();
}

const result = mergeArrays(
    [1, 2],
    [3, 4],
    [5]
);

console.log(result);