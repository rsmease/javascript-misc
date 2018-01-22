//ES6 implementation of the DLL published by Cho S. Kim
//https://code.tutsplus.com/articles/data-structures-with-javascript-singly-linked-list-and-doubly-linked-list--cms-23392

class Node {
    constructor(data) {
        this.data = data;
        this.prev = null;
        this.next = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.length = 0;
        this.head = null;
        this.tail = null;
    }

    add(data) {
        const nodeToAdd = new Node(data);

        if (this.length === 0) {
            //nodeToAdd is both head and tail
            //nodeToAdd has no .prev and no .next
            //nodeToAdd will never have a .prev if it is first,
            //but it's .next can be reset (see line 31)
            this.head = nodeToAdd;
            this.tail = nodeToAdd;
        } else {
            //reset this.tail.next from null to nodeToAdd
            this.tail.next = nodeToAdd;
            //attach nodeToAdd to former this.tail by adding it as nodeToAdd.prev
            nodeToAdd.prev = this.tail;
            //reset this.tail to be nodeToAdd
            this.tail = nodeToAdd;
        }
    }

    searchNodeAt(i) {
        let currentNode = this.head;
        const length = this.length;
        let count = 0;
        const failfailMessage = {
            failed: 'Failure: non-existent node'
        };

        if (length === 0 || i < 1 || i > length) {
            throw new Error(failfailMessage.failed);
        }

        while (count < i) {
            currentNode = currentNode.next;
            count++;
        }

        return currentNode;
    }

    remove(i) {
        let currentNode = this.head;
        let length = this.length;
        let count = 0;
        const failMessage = {
            failed: 'Failure: non-existent node'
        };
        let beforeNodeToDelete = null;
        let nodeToDelete = null;
        let afterNodeToDelete = null;
        let deletedNode = null;

        if (length === 0 || i < 1 || i > length) {
            throw new Error(failMessage.failed);
        }

        //remove first node
        //O(1)
        if (i === 1) {
            this.head = currentNode.next;

            //if this.head is now null, then there's only one node
            //this.tail was set to the only node on line 28
            //now we have to set it to null
            if (!this.head) {
                this.tail = null;
                //there's another node in the list 
                //that node is now the head;
                //that node's .prev should be reset to null;    
            } else {
                this.head.prev = null;
            }
            //remove last node, O(1) for DLL
        } else if (i === length) {
            //previous tail will automatically be garbage collected
            currentNode = currentNode.next;
            this.tail = this.tail.prev;
            this.tail.next = null;
            //remove some middle node 
        } else {
            while (count < i) {
                currentNode = currentNode.next;
                count++;
            }

            beforeNodeToDelete = currentNode.prev;
            nodeToDelete = currentNode;
            afterNodeToDelete = currentNode.next;

            beforeNodeToDelete.next = afterNodeToDelete;
            afterNodeToDelete.prev = beforeNodeToDelete;
            deletedNode = nodeToDelete;
            nodeToDelete = null;
        }

        length--;
        return deletedNode;
    }

    reverse() {
        const head = self.head;
        let current = self.head;
        let temp = undefined;

        while (current) {
            temp = current.next;
            current.next = current.prev;
            current.prev = temp;
            if (!temp) {
                this.head = current;
            }
            current = temp;
        }
        return this;
    }

}