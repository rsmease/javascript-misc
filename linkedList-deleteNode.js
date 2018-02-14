function deleteNode(head, position) {
    let current = head;
    let previous = null;
    let counter = 0;

    while (current && counter < position) {
        counter++;
        previous = current;
        current = current.next;
    }

    if (previous) {
        previous.next = previous.next.next;
    } else {
        let temp = current;
        current = current.next;
        head = current;
    }
    return head;
}