class Stack {
    constructor() {
        this.count = 0;
        this.store = {};
    }

    push(data) {
        this.store[this.count] = data;
        this.count++;
    }

    pop() {
        if (this.count === 0) {
            return undefined;
        } else {
            const removedItem = this.store[this.count - 1];
            delete this.store[this.count - 1];
            this.count--;
            return removedItem;
        }
    }

    peek() {
        return this.store[this.count - 1];
    }

    length() {
        return this.count + 1;
    }

    swap() {
        let last = this.store[this.count - 1];
        let secondToLast = this.store[this.count - 2];

        this.store[this.count - 2] = last;
        this.store[this.count - 1] = secondToLast;

    }

    isEmpty() {
        return this.count === 0;
    }

}