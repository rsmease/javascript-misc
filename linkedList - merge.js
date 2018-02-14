function mergeLinkedLists(headA, headB) {
    if (!headB) {
        return headA;
    } else if (!headA) {
        return headB;
    }

    let currentA = headA;
    let currentB = headB;


    let currentMerge;
    let head = currentMerge;

    if (currentA.data < currentB.data) {
        currentMerge = currentA;
        currentMerge.next = mergeLinkedLists(currentA.next, currentB);
    } else {
        currentMerge = currentB;
        currentMerge.next = mergeLinkedLists(currentA, currentB.next);
    }

    return currentMerge;



}