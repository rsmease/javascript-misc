function reverseLinkedList(head) {
    let previous = null;
    let current = head;
    let next = current.next;
    while (current !== null) {
        next = current.next;
        current.next = previous;
        previous = current;
        current = next;
    }
    head = previous;
    return head;
}