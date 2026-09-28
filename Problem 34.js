// An EventEmitter allows us to:

// create events
// listen for events
// trigger events
// remove listeners



class EventEmitter {
    constructor() {
        this.events = {};
    }

    on(event, listener) {
        if (!this.events[event]) {
            this.events[event] = [];
        }

        this.events[event].push(listener);
    }

    emit(event, ...args) {
        if (this.events[event]) {
            this.events[event].forEach(listener => {
                listener(...args);
            });
        }
    }

    off(event, listener) {
        if (this.events[event]) {
            this.events[event] =
                this.events[event].filter(item => item !== listener);
        }
    }
}

const emitter = new EventEmitter();

function greet(name) {
    console.log("Hello " + name);
}

emitter.on("greet", greet);

emitter.emit("greet", "Sara");

emitter.off("greet", greet);

emitter.emit("greet", "Ali");