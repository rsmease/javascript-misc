def max_rot(n)
	result = n.to_s.split("")
	for entry in 0..(result.length - 2)
		pulled = result.delete_at(entry)
		result = result.push(pulled)
		p result.join("").to_i
	end
	return result.join("").to_i
end

p max_rot(56789)

#56789 -> 67895 -> 68957 -> 68579 -> 68597

