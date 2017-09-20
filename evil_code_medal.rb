# EvilCode is a game similar to Codewars. You have to solve programming tasks as quickly as possible. However, unlike Codewars, EvilCode awards you with a medal, depending on the time you took to solve the task.

# To get a medal, your time must be (strictly) inferior to the time corresponding to the medal. You can be awarded "Gold", "Silver" or "Bronze" medal, or "None" medal at all. Only one medal (the best achieved) is awarded.

# You are given the time achieved for the task and the time corresponding to each medal. Your task is to return the awarded medal.

# Each time is given in the format HH:MM:SS.

# Input/Output

# [input] string userTime

# describe "Basic tests" do
# Test.assert_equals(evil_code_medal("00:30:00","00:15:00","00:45:00","01:15:00"),"Silver")
# Test.assert_equals(evil_code_medal("01:15:00","00:15:00","00:45:00","01:15:00"),"None")
# Test.assert_equals(evil_code_medal("00:00:01","00:00:10","00:01:40","01:00:00"),"Gold")
# Test.assert_equals(evil_code_medal("00:10:01","00:00:10","00:01:40","01:00:00"),"Bronze")
# Test.assert_equals(evil_code_medal("00:00:01","00:00:02","00:00:03","00:00:04"),"Gold")
# Test.assert_equals(evil_code_medal("90:00:01","60:00:02","70:00:03","80:00:04"),"None")
# Test.assert_equals(evil_code_medal("03:15:00","03:15:00","03:15:01","03:15:02"),"Silver")
# Test.assert_equals(evil_code_medal("99:59:58","99:59:57","99:59:58","99:59:59"),"Bronze")
# Test.assert_equals(evil_code_medal("14:49:03","77:39:08","92:11:36","94:07:41"),"Gold")
# Test.assert_equals(evil_code_medal("61:01:40","64:19:53","79:30:02","95:24:48"),"Gold")
# end

def evil_code_medal(user_time, gold, silver, bronze)
	sum_user = sum_time(user_time)

	sum_gold = sum_time(gold)
	if (sum_user < sum_gold)
		return "Gold"
	end

	sum_silver = sum_time(silver)
	if (sum_user < sum_silver)
		return "Silver"
	end

	sum_bronze = sum_time(bronze)
	if (sum_user < sum_bronze)
		return "Bronze"
	end

	return "None"
end

def sum_time(time)
	split_time = time.split(":").map{|num| num.to_i}
	return split_time[0]*60*60 + split_time[1]*60 + split_time[2]
end

#Lol, apparently I could have just compared the strings.
#def evil_code_medal(user_time, gold, silver, bronze)
#   return "Gold" if user_time < gold
#   return "Silver" if user_time < silver
#   return "Bronze" if user_time < bronze
#   return "None"
# end