# Write a function partlist that gives all the ways to divide a list (an array) of at least two elements into two non-empty parts.

# Each two non empty parts will be in a pair (or an array for languages without tuples or a structin C - C: see Examples test Cases - )
# Each part will be in a string
# Elements of a pair must be in the same order as in the original array.
# Example:

# a = ["az", "toto", "picaro", "zone", "kiwi"] -->

# [["az", "toto picaro zone kiwi"], ["az toto", "picaro zone kiwi"], ["az toto picaro", "zone kiwi"], ["az toto picaro zone", "kiwi"]]

# or

# a = {"az", "toto", "picaro", "zone", "kiwi"} -->

# {{"az", "toto picaro zone kiwi"}, {"az toto", "picaro zone kiwi"}, {"az toto picaro", "zone kiwi"}, {"az toto picaro zone", "kiwi"}}

# or

# a = ["az", "toto", "picaro", "zone", "kiwi"] -->

# [("az", "toto picaro zone kiwi"), ("az toto", "picaro zone kiwi"), ("az toto picaro", "zone kiwi"), ("az toto picaro zone", "kiwi")]

# or

# a = [|"az", "toto", "picaro", "zone", "kiwi"|] -->

# [("az", "toto picaro zone kiwi"), ("az toto", "picaro zone kiwi"), ("az toto picaro", "zone kiwi"), ("az toto picaro zone", "kiwi")]

# You can see other examples for each language in "Your test cases"

def partlist(arr)
    arr_of_arrs = []
    for index in 0...arr.length - 1
    	part1 = arr[0..index].join(" ")
    	part2 = arr[index + 1...arr.length].join(" ")
    	arr_of_arrs.push([part1, part2])
    end
    return arr_of_arrs
end

p partlist(["az", "toto", "picaro", "zone", "kiwi"])