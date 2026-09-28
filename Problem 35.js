function myMap(arr, callback) {
    let result = [];

    for (let i = 0; i < arr.length; i++) {
        result.push(callback(arr[i]));
    }

    return result;
}

const numbers = [1, 2, 3];

const result = myMap(numbers, function(x) {
    return x * 2;
});

console.log(result);