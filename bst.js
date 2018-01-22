//https://initjs.org/implement-a-binary-search-tree-in-javascript-952a44ee7c26
//Based on this implementation of a BST;

class BinaryST {
    constructor(val) {
        this.val = val;
        this.right = undefined;
        this.left = undefined;
    }

    insert(val) {
        const newNode = new BinaryST(val);

        function insertChildNode(currentNode) {
            if (currentNode.val > newNode.val && currentNode.left === undefined) {
                currentNode.left = newNode;
                return newNode;
            } else if (currentNode.val > newNode.val) {
                insertChildNode(currentNode.left);
            } else if (currentNode.val <= newNode.val && currentNode.right === undefined) {
                currentNode.right = newNode;
                return newNode;
            } else {
                insertChildNode(currentNode.right);
            }
        }

        insertChildNode(this);
    }

    find(soughtVal) {
        const foundNode = undefined;

        function findNode(currentNode) {
            if (currentNode.val === soughtVal) {
                foundNode = currentNode;
            } else if (currentNode.val > soughtVal && currentNode.right) {
                findNode(currentNode.right);
            } else if (currentNode.val < soughtVal && currentNode.left) {
                findNode(currentNode.left);
            }
        }

        findNode(this);
        return foundNode;
    }

    DFmap(cb) {
        function applyToChildNodes(currentNode) {
            cb.call(currentNode);

            if (currentNode.right) {
                applyToChildNodes(currentNode.right);
            } else if (currentNode.left) {
                applyToChildNodes(currentNode.left);
            }
        }

        applyToChildNodes(this);
    }

    //implemented with an underperforming array queue
    BFmap(cb) {
        const currentQueue = [this];

        function applyToChildNodes(currentNode) {
            while (currentQueue.length) {
                const nextQueue = [];
                for (var i = 0; i < currentQueue.length; i++) {
                    const nextNode = currentQueue[i];
                    cb.call(nextNode);
                    if (nextNode.left) {
                        nextQueue.push(nextNode.left);
                    }
                    if (nextNode.right) {
                        nextQueue.push(nextNode.right);
                    }
                }
                currentQueue = nextQueue;
            }
        }
    }
}