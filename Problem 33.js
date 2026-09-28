function deepClone(obj) {
    if (obj === null || typeof obj !== "object") {
        return obj;
    }

    if (Array.isArray(obj)) {
        return obj.map(item => deepClone(item));
    }

    let copy = {};

    for (let key in obj) {
        copy[key] = deepClone(obj[key]);
    }

    return copy;
}

const a = {
    x: {
        y: 1
    }
};

const b = deepClone(a);

b.x.y = 99;

console.log("Original:", a);
console.log("Copy:", b);