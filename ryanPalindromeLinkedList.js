//NOT MY SOLUTION: Added here to examine/rewrite solution of user 'kov', CodeFights

function isListPalindrome(l) {
    let slow = null;
    let fast = l;
    let temp = undefined;

    while (fast && fast.next) {
        //node 7
        fast = fast.next.next;
        //node 4
        temp = l.next;
        //node 2
        l.next = slow;
        //node 3
        slow = l;
        //node 4
        l = temp;
    }

    if (fast) {
        l = l.next;
    }

    while (l) {
        if (slow.value != l.value) {
            return false;
        }
        slow = slow.next;
        l = l.next;
    }

    return true;
}