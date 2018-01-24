# Definition for singly - linked list:
# class ListNode
#   attr_accessor: value, : next
#   def initialize(val)
# @value = val
# @next = nil
# end
#
def mergeTwoLinkedLists(l1, l2)
    l3 = ListNode.new(nil)
    head = l3
    loop do
        if l1.nil? || l2.nil? 
            return head
        end
        if l1.value.nil? && l2.value.nil?
            return head
        elsif l2.value.nil?
            l3.value = l1.value
            return head
        elsif l1.value.nil?
            l3.value = l2.value 
            return head
        else
            if l1.value <= l2.value
                l3.value = l1.value
                return head
            else 
                l3.value = l2.value
                return head
            end
        end
    end
end