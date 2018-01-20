class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.length = 0;
        this.head = null;
    }
}

SinglyLinkedList.prototype.add = function (value) {
    const node = new Node(value);
    const currentNode = this.head;

    //returns false if null
    if (!currentNode) {
        this.head = node;
        this.length++;
    }

    while (currentNode.next) {
        currentNode = currentNode.next;
    }

    currentNode.next = node;
    this.length++;

    return node;
};

SinglyLinkedList.prototype.searchNodeAt = function (i) {
    let currentNode = this.head;
    const length = this.length;
    let count = 1;
    const failMessage = {
        failed: 'Failed: non-existent node'
    };

    if (i < 0 || i > length) {
        throw new Error(failMessage.failed);
    }

    while (count < i) {
        currentNode = currentNode.next;
        count++;
    }

    return currentNode;
};

SinglyLinkedList.prototype.remove = function (i) {
    let currentNode = this.head;
    const length = this.length;
    let count = 0;
    const failMessage = {
        failed: 'Failed: non-existent node'
    };
    let beforeNodeToDelete = null;
    let nodeToDelete = null;
    let deletedNode = null;

    if (i < 0 || i > length) {
        throw new Error(failMessage.failed);
    }

    if (i === 1) {
        this.head = currentNode.next;
        deletedNode = currentNode;
        currentNode = null;
        this.length--;

        return deletedNode;
    }

    while (count < i) {
        beforeNodeToDelete = currentNode;
        nodeToDelete = currentNode.next;
        count++;
    }

    beforeNodeToDelete.next = nodeToDelete.next;
    deletedNode = nodeToDelete;
    nodeToDelete = null;
    this.lenght--;

    return deletedNode;
};