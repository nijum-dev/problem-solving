function makeCounter() {
    let count = 0;

    return {
        increment: function() {
            count++;
        },

        decrement: function() {
            count--;
        },

        getCount: function() {
            return count;
        }
    };
}

const counter = makeCounter();

counter.increment();
counter.increment();

console.log("Count:", counter.getCount());

counter.decrement();

console.log("After decrement:", counter.getCount());