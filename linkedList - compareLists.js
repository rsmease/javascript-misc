function compareLinkedLists(headA, headB) {
    if (!headA && !headB) {
        return 1;
    } else if (headA && !headB || !headA && headB) {
        return 0;
    }

    let currentA = headA;
    let currentB = headB;

    while (currentA && currentB) {
        if (currentA.data !== currentB.data) {
            return 0;
        }

        currentA = currentA.next;
        currentB = currentB.next;
    }

    if (currentA || currentB) {
        return 0;
    } else {
        return 1;
    }


}