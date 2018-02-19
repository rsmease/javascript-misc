//Heap is a tree-like DS which each nodes must be ordered with respect to the value of its children
//A parent node's value must always be greater or less than the value of its children
//Binary heap: heap where each parent has two children, populated left to right 

class Node {
    constructor(value, priority) {
        this.value = value;
        this.priority = priority;
        this.next = null;
    }
}

//first solving with a simple linked list, leading to a less efficient insertion time (potentially O(number of Nodes))

//edge cases: when the priority queue is empty, this.first should be a new node; when a new node has higher priority, this.first needs to be reset to the new node

class NaivePriorityQueue {
    constructor() {
        this.first = null;
    }

    insert(value, priority) {
        const newNode = new Node(value, priority);
        if (!this.first || priority > this.first.priority) {
            newNode.next = this.first;
            this.first = newNode;
        } else {
            let pointer = this.first;
            while (pointer.next && priority < pointer.next.priority) {
                pointer = point.next;
            }
            newNode.next = pointer.next;
            pointer.next = newNode;
        }
    }

    remove() {
        const first = this.first;
        this.first = this.first.next;
        return first;
    }
}

class PriorityQueue {
    constructor() {
        this.heap = [null];
    }

    insert(value, priority) {
        const newNode = new Node(value, priority);
        this.heap.push(newNode);
        let currentNodeIndex = this.heap.length - 1;
        let currentNodeParentIndex = Math.floor(currentNodeIndex / 2);
        while (
            this.heap[currentNodeParentIndex] &&
            newNode.priority > this.heap[currentNodeParentIndex].priority
        ) {

        }
    }
}