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
            puts "l1 is nil" if l1.nil?
            puts "l2 is nil" if l2.nil?
            if l1.nil? && l2.nil? 
                return head
            elsif l1.nil?
                l3.value = l2.value
                l2 = l2.next ? l2.next : nil
                unless l2.nil?
                    l3.next = ListNode.new(nil)
                    l3 = l3.next
                end
            else
                puts "l2 is nil"
                return head
            end
        else 
            if l1.value.nil? && l2.value.nil?
                return head
            elsif l2.value.nil?
                l3.value = l1.value
                l3.next = l1.next
                return head
            elsif l1.value.nil?
                l3.value = l2.value
                l3.next = l2.next
                return head
            else
                if l1.value <= l2.value
                    l3.value = l1.value
                    l1 = l1.next ? l1.next : nil
                    l3.next = ListNode.new(nil)
                    l3 = l3.next
                else 
                    l3.value = l2.value
                    l2 = l2.next ? l2.next : nil
                    l3.next = ListNode.new(nil)
                    l3 = l3.next
                    return head
                end
            end
        end
    end
end