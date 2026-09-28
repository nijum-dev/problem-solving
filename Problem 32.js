function throttle(fn, limit) {
    let lastCall = 0;

    return function() {
        let now = Date.now();

        if (now - lastCall >= limit) {
            fn();
            lastCall = now;
        }
    };
}

function showMessage() {
    console.log("Function executed");
}

const throttledFunction = throttle(showMessage, 1000);

throttledFunction();

setTimeout(throttledFunction, 500);
setTimeout(throttledFunction, 1200);