#implemented in Ruby due to processing errors in Javascript

def addTwoHugeNumbers(a, b)
    nums = ["", ""];
    current_a = a;
    current_b = b;
    
    while current_a || current_b do
        nums[0] += pad_zeros(current_a.value.to_s) unless !current_a
        nums[1] += pad_zeros(current_b.value.to_s) unless !current_b
        current_a = current_a.next unless !current_a
        current_b = current_b.next unless !current_b
    end
    big_num = nums.map(&:to_i).reduce(:+).to_s;
    
    puts big_num
    result = ListNode.new(big_num[-4..-1])
    big_num = big_num[0...-4]
    puts big_num
    
    while big_num.length >=4 do
        puts big_num
        result.next = ListNode.new(big_num[-4..1].to_i)
        result = result.next
        big_num = big_num[0...-4]
    end
    
    result 
     
end

def pad_zeros(num_string)
    until num_string.length == 4 do
        num_string = "0" + num_string;
    end
    num_string
end
