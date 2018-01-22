//https://initjs.org/implement-a-queue-in-javascript-de306a8821c
//Based on O(1) implementation found at the link above;

class Queue {
    constructor() {
        this.store = {};
        this.last = 0;
        this.first = 0;
        this.isEmpty = this.isEmpty.bind(this);
    }

    length() {
        return this.last - this.first;
    }

    isEmpty() {
        return this.length === 0;
    }

    enqueue(data) {
        this.store[this.last] = data;
        this.last++;
    }

    dequeue() {
        if (this.isEmpty) {
            return undefined;
        } else {
            const removedElement = this.store[this.first];
            delete this.store[this.first];
            this.first++;
            return removedElement;
        }
    }


}